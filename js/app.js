// ── Configuração ──────────────────────────────────────
// Número do atendente que recebe o pedido no WhatsApp (formato internacional, só dígitos)
const NUMERO_ATENDENTE = "5521964091530"; // Jean

let carrinho = [];
let categoriaAtiva = "Titan";
let paginaAtual = 1;
const PRODUTOS_POR_PAGINA = 4;

function getProdutos(categoria) {
  return produtos.filter(p => p.categoria === categoria);
}

const BANNERS_NOVIDADE = {
  "Monster Goat": "assets/images/banners/monster-goat.png",
  "Hammer Force PM": "assets/images/banners/hammer-force-pm.png",
};

function renderizarProdutos(categoria) {
  const grid = document.getElementById("grid-produtos");
  const titulo = document.getElementById("titulo-categoria");
  titulo.textContent = categoria;

  const bannerExistente = document.getElementById("banner-novidade");
  if (bannerExistente) bannerExistente.remove();

  const bannerSrc = BANNERS_NOVIDADE[categoria];
  if (bannerSrc) {
    const banner = document.createElement("img");
    banner.id = "banner-novidade";
    banner.className = "banner-novidade";
    banner.src = bannerSrc;
    banner.alt = `Novidade: ${categoria}`;
    banner.onerror = function() { this.style.display = "none"; };
    titulo.insertAdjacentElement("afterend", banner);
  }

  const lista = getProdutos(categoria);
  const totalPaginas = Math.ceil(lista.length / PRODUTOS_POR_PAGINA);
  const inicio = (paginaAtual - 1) * PRODUTOS_POR_PAGINA;
  const fim = inicio + PRODUTOS_POR_PAGINA;
  const paginados = lista.slice(inicio, fim);

  grid.innerHTML = paginados.map(p => gerarCardHTML(p)).join("");

  renderizarPaginacao(totalPaginas);
}

function renderizarPaginacao(totalPaginas) {
  const container = document.getElementById("paginacao");
  if (totalPaginas <= 1) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <button class="btn-pagina" onclick="mudarPagina(-1)" ${paginaAtual === 1 ? "disabled" : ""}>← Anterior</button>
    <span class="pagina-info">Página ${paginaAtual} de ${totalPaginas}</span>
    <button class="btn-pagina" onclick="mudarPagina(1)" ${paginaAtual === totalPaginas ? "disabled" : ""}>Próximo →</button>
  `;
}

function mudarPagina(direcao) {
  const lista = getProdutos(categoriaAtiva);
  const totalPaginas = Math.ceil(lista.length / PRODUTOS_POR_PAGINA);
  paginaAtual = Math.min(Math.max(paginaAtual + direcao, 1), totalPaginas);
  renderizarProdutos(categoriaAtiva);
}

function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  mostrarModalQuantidade(produto);
}

function mostrarModalQuantidade(produto) {
  const temPesos = Array.isArray(produto.pesos) && produto.pesos.length > 0;
  const seletorPeso = temPesos ? `
      <div class="campo-peso-destaque">
        <label for="select-peso">Escolha o peso</label>
        <select id="select-peso">
          ${produto.pesos.map(p => `<option value="${p}">${p} kg</option>`).join("")}
        </select>
      </div>
  ` : "";

  const overlay = document.createElement("div");
  overlay.className = "overlay-quantidade";
  overlay.innerHTML = `
    <div class="modal-quantidade">
      <img src="${produto.foto}" alt="${produto.nome}" onerror="this.style.display='none'">
      <h3>${produto.nome}${produto.codigo ? ` <span class="produto-codigo">${produto.codigo}</span>` : ""}</h3>
      ${seletorPeso}
      <div class="modal-quantidade-controle">
        <button onclick="alterarQuantidade(-1)">−</button>
        <input type="number" id="input-quantidade" value="1" min="1" max="99">
        <button onclick="alterarQuantidade(1)">+</button>
      </div>
      <div class="modal-quantidade-btns">
        <button class="btn-cancelar-modal" onclick="this.closest('.overlay-quantidade').remove()">Cancelar</button>
        <button class="btn-confirmar-modal" onclick="confirmarAdicao(${produto.id})">Adicionar ao pedido</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

function alterarQuantidade(delta) {
  const input = document.getElementById("input-quantidade");
  const novoValor = parseInt(input.value) + delta;
  if (novoValor >= 1 && novoValor <= 99) {
    input.value = novoValor;
  }
}

function confirmarAdicao(id) {
  const produto = produtos.find(p => p.id === id);
  const quantidade = parseInt(document.getElementById("input-quantidade").value) || 1;
  const seletorPeso = document.getElementById("select-peso");
  const pesoEscolhido = seletorPeso ? parseInt(seletorPeso.value) : null;

  // Com peso, cada peso escolhido vira um item separado no carrinho
  // (senão "2x Barra 10kg" e "1x Barra 20kg" ficariam misturados num só item)
  const existente = carrinho.find(i => i.id === id && i.pesoEscolhido === pesoEscolhido);

  if (existente) {
    existente.quantidade += quantidade;
  } else {
    carrinho.push({ ...produto, quantidade, pesoEscolhido });
  }

  document.querySelector(".overlay-quantidade").remove();
  renderizarCarrinho();
  const textoToast = pesoEscolhido ? `${quantidade}x ${produto.nome} (${pesoEscolhido}kg) adicionado!` : `${quantidade}x ${produto.nome} adicionado!`;
  mostrarToast(textoToast);
}

function mostrarToast(mensagem) {
  const toast = document.createElement("div");
  toast.className = "toast-sucesso";
  toast.innerHTML = `✓ ${mensagem}`;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("visivel"), 10);
  setTimeout(() => {
    toast.classList.remove("visivel");
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter(i => i.id !== id);
  renderizarCarrinho();
}

function renderizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const contador = document.getElementById("contador-itens");

  const totalItens = carrinho.reduce((acc, i) => acc + i.quantidade, 0);
  contador.textContent = totalItens;

  if (carrinho.length === 0) {
    lista.innerHTML = `<p class="carrinho-vazio">Seu carrinho está vazio</p>`;
    return;
  }

  lista.innerHTML = carrinho.map(i => `
    <div class="carrinho-item">
      <img src="${i.foto}" alt="${i.nome}">
      <div class="carrinho-item-info">
        <p>${i.nome}${i.codigo ? ` <span class="produto-codigo">${i.codigo}</span>` : ""}${i.pesoEscolhido ? ` — ${i.pesoEscolhido}kg` : ""}</p>
        <span>Quantidade: ${i.quantidade}</span>
      </div>
      <button class="btn-remover" onclick="removerDoCarrinho(${i.id})">×</button>
    </div>
  `).join("");
}

function selecionarCategoria(categoria) {
  categoriaAtiva = categoria;
  paginaAtual = 1;
  document.querySelectorAll("#lista-categorias li").forEach(li => {
    li.classList.toggle("ativo", li.dataset.categoria === categoria);
  });
  renderizarProdutos(categoria);
}

document.querySelectorAll("#lista-categorias li").forEach(li => {
  li.addEventListener("click", () => selecionarCategoria(li.dataset.categoria));
});

function buscarProdutos() {
  const termo = document.querySelector(".busca-input").value.trim().toLowerCase();
  const titulo = document.getElementById("titulo-categoria");
  const grid = document.getElementById("grid-produtos");

  document.querySelectorAll("#lista-categorias li").forEach(li => {
    li.classList.remove("ativo");
  });

  paginaAtual = 1;

  if (termo === "") {
    const todos = produtos;
    titulo.textContent = "Todos os produtos";
    const totalPaginas = Math.ceil(todos.length / PRODUTOS_POR_PAGINA);
    const paginados = todos.slice(0, PRODUTOS_POR_PAGINA);
    grid.innerHTML = paginados.map(p => gerarCardHTML(p)).join("");
    renderizarPaginacaoCustom(todos, totalPaginas);
  } else {
    const resultado = produtos.filter(p =>
      p.nome.toLowerCase().includes(termo)
    );
    titulo.textContent = `Resultados para "${termo}"`;
    if (resultado.length === 0) {
      grid.innerHTML = `<p style="color:#888; font-size:20px;">Nenhum produto encontrado.</p>`;
      document.getElementById("paginacao").innerHTML = "";
      return;
    }
    const totalPaginas = Math.ceil(resultado.length / PRODUTOS_POR_PAGINA);
    const paginados = resultado.slice(0, PRODUTOS_POR_PAGINA);
    grid.innerHTML = paginados.map(p => gerarCardHTML(p)).join("");
    renderizarPaginacaoCustom(resultado, totalPaginas);
  }
}

function gerarCardHTML(p) {
  return `
    <div class="produto-card">
      ${p.destaque ? `<div class="badge-destaque">Destaque</div>` : ""}
      <img src="${p.foto}" alt="${p.nome}" onerror="this.style.display='none'">
      <div class="produto-info">
        <p class="produto-nome">${p.nome}${p.codigo ? ` <span class="produto-codigo">${p.codigo}</span>` : ""}</p>
      </div>
      <button class="btn-add" onclick="adicionarAoCarrinho(${p.id})">Adicionar</button>
    </div>
  `;
}

function renderizarPaginacaoCustom(lista, totalPaginas) {
  const container = document.getElementById("paginacao");
  if (totalPaginas <= 1) {
    container.innerHTML = "";
    return;
  }
  container.innerHTML = `
    <button class="btn-pagina" onclick="mudarPaginaCustom(-1)" ${paginaAtual === 1 ? "disabled" : ""}>← Anterior</button>
    <span class="pagina-info">Página ${paginaAtual} de ${totalPaginas}</span>
    <button class="btn-pagina" onclick="mudarPaginaCustom(1)" ${paginaAtual === totalPaginas ? "disabled" : ""}>Próximo →</button>
  `;
}

function mudarPaginaCustom(direcao) {
  const termo = document.querySelector(".busca-input").value.trim().toLowerCase();
  const lista = termo === "" ? produtos : produtos.filter(p => p.nome.toLowerCase().includes(termo));
  const totalPaginas = Math.ceil(lista.length / PRODUTOS_POR_PAGINA);
  paginaAtual = Math.min(Math.max(paginaAtual + direcao, 1), totalPaginas);
  const paginados = lista.slice((paginaAtual - 1) * PRODUTOS_POR_PAGINA, paginaAtual * PRODUTOS_POR_PAGINA);
  document.getElementById("grid-produtos").innerHTML = paginados.map(p => gerarCardHTML(p)).join("");
  renderizarPaginacaoCustom(lista, totalPaginas);
}

document.querySelector(".btn-ver-todos").addEventListener("click", buscarProdutos);

document.querySelector(".busca-input").addEventListener("keydown", function(e) {
  if (e.key === "Enter") buscarProdutos();
});

// ── Envio do pedido: captura nome/WhatsApp, salva no Firebase e redireciona ──

document.querySelector(".btn-enviar-pedido").addEventListener("click", () => {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  mostrarModalContato();
});

function mostrarModalContato() {
  const overlay = document.createElement("div");
  overlay.className = "overlay-contato";
  overlay.innerHTML = `
    <div class="modal-contato">
      <h2>Quase lá!</h2>
      <p>Informe seus dados para receber seu orçamento personalizado.</p>
      <div class="campo-contato">
        <label for="input-nome">Nome</label>
        <input type="text" id="input-nome" placeholder="Seu nome">
      </div>

      <div class="campo-contato">
        <label>Tipo de documento</label>
        <div class="toggle-tipo-doc">
          <button type="button" class="btn-tipo-doc ativo" id="btn-tipo-cnpj" data-tipo="cnpj">CNPJ</button>
          <button type="button" class="btn-tipo-doc" id="btn-tipo-cpf" data-tipo="cpf">CPF</button>
        </div>
      </div>

      <div class="campo-contato" id="grupo-cnpj">
        <label for="input-cnpj">CNPJ</label>
        <input type="text" id="input-cnpj" placeholder="00.000.000/0000-00" inputmode="numeric" maxlength="18">
      </div>

      <div class="campo-contato" id="grupo-cpf" style="display:none">
        <label for="input-cpf">CPF</label>
        <input type="text" id="input-cpf" placeholder="000.000.000-00" inputmode="numeric" maxlength="14">
      </div>
      <div class="campo-contato" id="grupo-cep" style="display:none">
        <label for="input-cep">CEP</label>
        <input type="text" id="input-cep" placeholder="00000-000" inputmode="numeric" maxlength="9">
      </div>
      <div class="campo-contato" id="grupo-endereco" style="display:none">
        <label for="input-endereco">Endereço</label>
        <input type="text" id="input-endereco" placeholder="Preenchido automaticamente pelo CEP">
      </div>
      <div class="campo-contato" id="grupo-numero" style="display:none">
        <label for="input-numero">Número</label>
        <input type="text" id="input-numero" placeholder="Ex: 123" inputmode="numeric">
      </div>
      <div class="campo-contato" id="grupo-email" style="display:none">
        <label for="input-email">E-mail</label>
        <input type="email" id="input-email" placeholder="seuemail@exemplo.com">
      </div>

      <div class="campo-contato">
        <label for="input-telefone">WhatsApp</label>
        <input type="tel" id="input-telefone" placeholder="(21) 90000-0000">
      </div>
      <p class="erro-contato" id="erro-contato"></p>
      <div class="modal-quantidade-btns">
        <button class="btn-cancelar-modal" onclick="this.closest('.overlay-contato').remove()">Cancelar</button>
        <button class="btn-confirmar-modal" id="btn-confirmar-contato">Enviar para o WhatsApp</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  let tipoDocumento = "cnpj";
  const btnCnpj = document.getElementById("btn-tipo-cnpj");
  const btnCpf = document.getElementById("btn-tipo-cpf");
  const grupoCnpj = document.getElementById("grupo-cnpj");
  const gruposCpf = [
    document.getElementById("grupo-cpf"),
    document.getElementById("grupo-cep"),
    document.getElementById("grupo-endereco"),
    document.getElementById("grupo-numero"),
    document.getElementById("grupo-email"),
  ];

  function selecionarTipo(tipo) {
    tipoDocumento = tipo;
    btnCnpj.classList.toggle("ativo", tipo === "cnpj");
    btnCpf.classList.toggle("ativo", tipo === "cpf");
    grupoCnpj.style.display = tipo === "cnpj" ? "" : "none";
    gruposCpf.forEach(g => g.style.display = tipo === "cpf" ? "" : "none");
    document.getElementById("erro-contato").textContent = "";
  }

  btnCnpj.addEventListener("click", () => selecionarTipo("cnpj"));
  btnCpf.addEventListener("click", () => selecionarTipo("cpf"));

  document.getElementById("btn-confirmar-contato").addEventListener("click", () => enviarPedido(tipoDocumento));
}

function formatarCNPJ(digitos) {
  return digitos.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
}

function formatarCPF(digitos) {
  return digitos.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
}

function formatarCEP(digitos) {
  return digitos.replace(/^(\d{5})(\d{3})$/, "$1-$2");
}

document.addEventListener("input", (e) => {
  if (e.target && e.target.id === "input-cnpj") {
    const digitos = e.target.value.replace(/\D/g, "").slice(0, 14);
    e.target.value = digitos.length === 14 ? formatarCNPJ(digitos) : digitos;
  }
  if (e.target && e.target.id === "input-cpf") {
    const digitos = e.target.value.replace(/\D/g, "").slice(0, 11);
    e.target.value = digitos.length === 11 ? formatarCPF(digitos) : digitos;
  }
  if (e.target && e.target.id === "input-cep") {
    const digitos = e.target.value.replace(/\D/g, "").slice(0, 8);
    e.target.value = digitos.length === 8 ? formatarCEP(digitos) : digitos;
    if (digitos.length === 8) buscarEnderecoPorCEP(digitos);
  }
  if (e.target && e.target.id === "input-numero") {
    e.target.value = e.target.value.replace(/\D/g, "");
  }
});

async function buscarEnderecoPorCEP(cepDigitos) {
  const campoEndereco = document.getElementById("input-endereco");
  if (!campoEndereco) return;
  campoEndereco.placeholder = "Buscando endereço...";
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cepDigitos}/json/`);
    const dados = await resposta.json();
    if (dados.erro) {
      campoEndereco.placeholder = "CEP não encontrado, digite manualmente";
      return;
    }
    const partes = [
      dados.logradouro,
      dados.bairro,
      dados.localidade && dados.uf ? `${dados.localidade} - ${dados.uf}` : (dados.localidade || dados.uf)
    ].filter(Boolean);
    campoEndereco.value = partes.join(", ");
    campoEndereco.placeholder = "Preenchido automaticamente pelo CEP";
  } catch (erro) {
    console.error("Erro ao buscar CEP:", erro);
    campoEndereco.placeholder = "Não foi possível buscar, digite manualmente";
  }
}

async function enviarPedido(tipoDocumento) {
  const nome = document.getElementById("input-nome").value.trim();
  const telefone = document.getElementById("input-telefone").value.trim();
  const erro = document.getElementById("erro-contato");
  const digitosTelefone = telefone.replace(/\D/g, "");

  if (nome.length < 2) {
    erro.textContent = "Informe seu nome.";
    return;
  }

  let dadosDocumento = {};
  let linhaIdentificacao = "";

  if (tipoDocumento === "cnpj") {
    const cnpj = document.getElementById("input-cnpj").value.trim();
    const digitosCNPJ = cnpj.replace(/\D/g, "");
    if (digitosCNPJ.length !== 14) {
      erro.textContent = "Informe um CNPJ válido (14 dígitos).";
      return;
    }
    const cnpjFormatado = formatarCNPJ(digitosCNPJ);
    dadosDocumento = { tipoDocumento: "cnpj", cnpj: digitosCNPJ };
    linhaIdentificacao = `CNPJ: ${cnpjFormatado}`;
  } else {
    const cpf = document.getElementById("input-cpf").value.trim();
    const cep = document.getElementById("input-cep").value.trim();
    const endereco = document.getElementById("input-endereco").value.trim();
    const numero = document.getElementById("input-numero").value.trim();
    const email = document.getElementById("input-email").value.trim();
    const digitosCPF = cpf.replace(/\D/g, "");
    const digitosCEP = cep.replace(/\D/g, "");

    if (digitosCPF.length !== 11) {
      erro.textContent = "Informe um CPF válido (11 dígitos).";
      return;
    }
    if (digitosCEP.length !== 8) {
      erro.textContent = "Informe um CEP válido (8 dígitos).";
      return;
    }
    if (endereco.length < 5) {
      erro.textContent = "Informe seu endereço completo.";
      return;
    }
    if (numero.length < 1) {
      erro.textContent = "Informe o número do endereço.";
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      erro.textContent = "Informe um e-mail válido.";
      return;
    }

    const cpfFormatado = formatarCPF(digitosCPF);
    const cepFormatado = formatarCEP(digitosCEP);
    dadosDocumento = { tipoDocumento: "cpf", cpf: digitosCPF, cep: digitosCEP, endereco: endereco, numero: numero, email: email };
    linhaIdentificacao = `CPF: ${cpfFormatado}\nEndereço: ${endereco}, nº ${numero}\nCEP: ${cepFormatado}\nE-mail: ${email}`;
  }

  if (digitosTelefone.length < 10) {
    erro.textContent = "Informe um WhatsApp válido com DDD.";
    return;
  }

  const btnConfirmar = document.getElementById("btn-confirmar-contato");
  btnConfirmar.disabled = true;
  btnConfirmar.textContent = "Enviando...";

  const itens = carrinho.map(i => ({ nome: i.nome, codigo: i.codigo || null, quantidade: i.quantidade, categoria: i.categoria, pesoEscolhido: i.pesoEscolhido || null }));

  // Verifica se esse telefone já pediu antes (cliente recorrente)
  let clienteRecorrente = false;
  let totalPedidosAnteriores = 0;
  try {
    const pedidosAnteriores = await db.collection("pedidos").where("telefone", "==", digitosTelefone).get();
    totalPedidosAnteriores = pedidosAnteriores.size;
    clienteRecorrente = totalPedidosAnteriores > 0;
  } catch (erroConsulta) {
    console.error("Erro ao consultar pedidos anteriores:", erroConsulta);
  }

  // Calcula a prioridade do lead com base no carrinho (linhas premium ou volume alto)
  const linhasPremium = ["Titan", "Monster", "Titanium"];
  const totalItens = itens.reduce((soma, i) => soma + i.quantidade, 0);
  const temLinhaPremium = itens.some(i => linhasPremium.includes(i.categoria));
  let prioridade = "baixa";
  if (temLinhaPremium || totalItens >= 8) prioridade = "alta";
  else if (totalItens >= 4) prioridade = "media";

  // Datas simples (pro n8n) e datas Firestore (pra gravar no banco)
  const agora = Date.now();
  const umDia = 24 * 60 * 60 * 1000;
  const followUpDia1Iso = new Date(agora + 1 * umDia).toISOString();
  const followUpDia3Iso = new Date(agora + 3 * umDia).toISOString();
  const followUpDia7Iso = new Date(agora + 7 * umDia).toISOString();

  const pedido = {
    nome: nome,
    ...dadosDocumento,
    telefone: digitosTelefone,
    itens: itens,
    status: "aguardando",
    canal: "site",
    horario: firebase.firestore.FieldValue.serverTimestamp(),
    prioridade: prioridade,
    clienteRecorrente: clienteRecorrente,
    totalPedidosAnteriores: totalPedidosAnteriores,
    followUpDia1: firebase.firestore.Timestamp.fromDate(new Date(followUpDia1Iso)),
    followUpDia3: firebase.firestore.Timestamp.fromDate(new Date(followUpDia3Iso)),
    followUpDia7: firebase.firestore.Timestamp.fromDate(new Date(followUpDia7Iso))
  };

  // Payload separado pro n8n — sem os tipos especiais do Firestore, só texto/número simples
  const payloadNotificacaoJean = {
    nome: nome,
    tipoDocumento: dadosDocumento.tipoDocumento,
    telefone: digitosTelefone,
    itens: itens,
    prioridade: prioridade,
    clienteRecorrente: clienteRecorrente,
    totalPedidosAnteriores: totalPedidosAnteriores,
    followUpDia3: followUpDia3Iso
  };

  try {
    await db.collection("pedidos").add(pedido);
  } catch (erroFirebase) {
    // Mesmo que o registro falhe, o cliente ainda deve conseguir falar com o atendente
    console.error("Erro ao salvar pedido no Firebase:", erroFirebase);
  }

  // Notifica o Jean automaticamente via WhatsApp — roda em segundo plano,
  // o cliente não vê nada disso e não precisa esperar a resposta.
  fetch("https://kikos-bot.onrender.com/webhook/pedido-site", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payloadNotificacaoJean)
  }).catch(erroWebhook => {
    console.error("Erro ao notificar n8n:", erroWebhook);
  });

  const linkWhatsApp = montarLinkWhatsApp(nome, linhaIdentificacao, itens);

  carrinho = [];
  renderizarCarrinho();
  document.querySelector(".overlay-contato").remove();

  window.location.href = linkWhatsApp;
}

function montarLinkWhatsApp(nome, linhaIdentificacao, itens) {
  // agrupa os itens por linha/categoria, mantendo a ordem em que cada linha apareceu no carrinho
  const porLinha = new Map();
  itens.forEach(i => {
    const linha = i.categoria || "Outros";
    if (!porLinha.has(linha)) porLinha.set(linha, []);
    porLinha.get(linha).push(i);
  });

  const blocos = [];
  for (const [linha, itensDaLinha] of porLinha) {
    const listaItens = itensDaLinha.map(i => `• ${i.quantidade}x ${i.nome}${i.pesoEscolhido ? ` ${i.pesoEscolhido}kg` : ""}${i.codigo ? ` (${i.codigo})` : ""}`).join("\n");
    blocos.push(`*Linha ${linha}*\n${listaItens}`);
  }
  const listaCompleta = blocos.join("\n\n");

  const texto =
    `Olá! Meu nome é ${nome}.\n` +
    `${linhaIdentificacao}\n` +
    `Gostaria de um orçamento para os seguintes equipamentos:\n\n` +
    `${listaCompleta}\n\n` +
    `Pode me ajudar?`;

  return `https://wa.me/${NUMERO_ATENDENTE}?text=${encodeURIComponent(texto)}`;
}

renderizarProdutos(categoriaAtiva);
renderizarCarrinho();
