function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatarHorario(timestamp) {
  if (!timestamp) return "";
  const data = timestamp.toDate();
  return data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

function formatarCNPJExibicao(digitos) {
  if (!digitos || digitos.length !== 14) return digitos || "";
  return digitos.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
}

function formatarCPFExibicao(digitos) {
  if (!digitos || digitos.length !== 11) return digitos || "";
  return digitos.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
}

function formatarCEPExibicao(digitos) {
  if (!digitos || digitos.length !== 8) return digitos || "";
  return digitos.replace(/^(\d{5})(\d{3})$/, "$1-$2");
}

function linkWhatsAppCliente(telefone) {
  const digitos = (telefone || "").replace(/\D/g, "");
  if (!digitos) return null;
  const comCodigoPais = digitos.startsWith("55") ? digitos : `55${digitos}`;
  return `https://wa.me/${comCodigoPais}`;
}

function gerarCardPedido(id, pedido) {
  const itensHTML = pedido.itens.map(item => `
    <li>
      <span>${item.quantidade}x ${item.nome}</span>
      ${item.precoVista ? `<span>${formatarMoeda(item.precoVista * item.quantidade)}</span>` : ""}
    </li>
  `).join("");

  const botoesHTML = pedido.status === "aguardando"
    ? `<button class="btn-acao btn-atender" onclick="atualizarStatus('${id}', 'em-atendimento')">Atender</button>
       <button class="btn-acao btn-cancelar" onclick="atualizarStatus('${id}', 'cancelado')">Cancelar</button>`
    : pedido.status === "em-atendimento"
    ? `<button class="btn-acao btn-concluir" onclick="atualizarStatus('${id}', 'concluido')">Concluir</button>
       <button class="btn-acao btn-cancelar" onclick="atualizarStatus('${id}', 'cancelado')">Cancelar</button>`
    : "";

  const identificacaoHTML = pedido.canal === "site"
    ? `<div class="pedido-cliente">
         <div>
           <strong>${pedido.nome || "Cliente sem nome"}</strong>
           ${pedido.cnpj ? `<div class="pedido-cnpj">CNPJ: ${formatarCNPJExibicao(pedido.cnpj)}</div>` : ""}
           ${pedido.cpf ? `<div class="pedido-cnpj">CPF: ${formatarCPFExibicao(pedido.cpf)}</div>` : ""}
           ${pedido.endereco ? `<div class="pedido-cnpj">Endereço: ${pedido.endereco}</div>` : ""}
           ${pedido.cep ? `<div class="pedido-cnpj">CEP: ${formatarCEPExibicao(pedido.cep)}</div>` : ""}
           ${pedido.email ? `<div class="pedido-cnpj">E-mail: ${pedido.email}</div>` : ""}
         </div>
         ${linkWhatsAppCliente(pedido.telefone) ? `<a href="${linkWhatsAppCliente(pedido.telefone)}" target="_blank" class="pedido-whatsapp">Abrir WhatsApp</a>` : ""}
       </div>`
    : `<div class="pedido-senha">${pedido.senha || ""}</div>`;

  const totalHTML = pedido.total ? `<div class="pedido-total">Total: ${formatarMoeda(pedido.total)}</div>` : "";

  return `
    <div class="pedido-card" id="pedido-${id}">
      ${identificacaoHTML}
      <div class="pedido-horario">${formatarHorario(pedido.horario)}</div>
      <ul class="pedido-itens">${itensHTML}</ul>
      ${totalHTML}
      <div class="pedido-acoes">${botoesHTML}</div>
    </div>
  `;
}

function atualizarStatus(id, novoStatus) {
  db.collection("pedidos").doc(id).update({ status: novoStatus });
}

function renderizarPedidos(pedidos) {
  const aguardando = [];
  const emAtendimento = [];
  const concluidos = [];

  pedidos.forEach(doc => {
    const pedido = doc.data();
    const id = doc.id;
    if (pedido.status === "aguardando") aguardando.push({ id, pedido });
    else if (pedido.status === "em-atendimento") emAtendimento.push({ id, pedido });
    else if (pedido.status === "concluido") concluidos.push({ id, pedido });
  });

  const listaAguardando = document.getElementById("lista-aguardando");
  const listaEmAtendimento = document.getElementById("lista-em-atendimento");
  const listaConcluido = document.getElementById("lista-concluido");
  const totalAguardando = document.getElementById("total-aguardando");

  totalAguardando.textContent = `${aguardando.length} pedido${aguardando.length !== 1 ? "s" : ""} aguardando`;

  listaAguardando.innerHTML = aguardando.length === 0
    ? `<p class="sem-pedidos">Nenhum pedido aguardando</p>`
    : aguardando.map(({ id, pedido }) => gerarCardPedido(id, pedido)).join("");

  listaEmAtendimento.innerHTML = emAtendimento.length === 0
    ? `<p class="sem-pedidos">Nenhum pedido em atendimento</p>`
    : emAtendimento.map(({ id, pedido }) => gerarCardPedido(id, pedido)).join("");

  listaConcluido.innerHTML = concluidos.length === 0
    ? `<p class="sem-pedidos">Nenhum pedido concluído</p>`
    : concluidos.map(({ id, pedido }) => gerarCardPedido(id, pedido)).join("");
}

// Escuta em tempo real
db.collection("pedidos")
  .orderBy("horario", "desc")
  .onSnapshot(snapshot => {
    renderizarPedidos(snapshot.docs);
  });

// Escuta chamados de atendente (uso do totem físico, se ainda ativo)
db.collection("chamados")
  .where("status", "==", "pendente")
  .onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type === "added") {
        mostrarAlertaChamado(change.doc.id);
      }
    });
  });

function mostrarAlertaChamado(id) {
  const alerta = document.createElement("div");
  alerta.className = "alerta-chamado";
  alerta.innerHTML = `
    <div class="alerta-chamado-conteudo">
      <span>🔔</span>
      <p>Cliente solicitou atendimento!</p>
      <button onclick="dispensarChamado('${id}', this.closest('.alerta-chamado'))">Dispensar</button>
    </div>
  `;
  document.body.appendChild(alerta);
}

function dispensarChamado(id, elemento) {
  db.collection("chamados").doc(id).update({ status: "dispensado" });
  elemento.remove();
}
