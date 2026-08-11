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

function renderizarProdutos(categoria) {
  const grid = document.getElementById("grid-produtos");
  const titulo = document.getElementById("titulo-categoria");
  titulo.textContent = categoria;

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
  const overlay = document.createElement("div");
  overlay.className = "overlay-quantidade";
  overlay.innerHTML = `
    <div class="modal-quantidade">
      <img src="${produto.foto}" alt="${produto.nome}" onerror="this.style.display='none'">
      <h3>${produto.nome}</h3>
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
  const existente = carrinho.find(i => i.id === id);

  if (existente) {
    existente.quantidade += quantidade;
  } else {
    carrinho.push({ ...produto, quantidade });
  }

  document.querySelector(".overlay-quantidade").remove();
  renderizarCarrinho();
  mostrarToast(`${quantidade}x ${produto.nome} adicionado!`);
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
        <p>${i.nome}</p>
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
        <p class="produto-nome">${p.nome}</p>
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
        <label for="input-cnpj">CNPJ</label>
        <input type="text" id="input-cnpj" placeholder="00.000.000/0000-00" inputmode="numeric" maxlength="18">
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

  document.getElementById("btn-confirmar-contato").addEventListener("click", enviarPedido);
}

function formatarCNPJ(digitos) {
  return digitos.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
}

document.addEventListener("input", (e) => {
  if (e.target && e.target.id === "input-cnpj") {
    const digitos = e.target.value.replace(/\D/g, "").slice(0, 14);
    e.target.value = digitos.length === 14 ? formatarCNPJ(digitos) : digitos;
  }
});

async function enviarPedido() {
  const nome = document.getElementById("input-nome").value.trim();
  const cnpj = document.getElementById("input-cnpj").value.trim();
  const telefone = document.getElementById("input-telefone").value.trim();
  const erro = document.getElementById("erro-contato");

  const digitosCNPJ = cnpj.replace(/\D/g, "");
  const digitosTelefone = telefone.replace(/\D/g, "");

  if (nome.length < 2) {
    erro.textContent = "Informe seu nome.";
    return;
  }
  if (digitosCNPJ.length !== 14) {
    erro.textContent = "Informe um CNPJ válido (14 dígitos).";
    return;
  }
  if (digitosTelefone.length < 10) {
    erro.textContent = "Informe um WhatsApp válido com DDD.";
    return;
  }

  const btnConfirmar = document.getElementById("btn-confirmar-contato");
  btnConfirmar.disabled = true;
  btnConfirmar.textContent = "Enviando...";

  const itens = carrinho.map(i => ({ nome: i.nome, quantidade: i.quantidade }));
  const cnpjFormatado = formatarCNPJ(digitosCNPJ);

  const pedido = {
    nome: nome,
    cnpj: digitosCNPJ,
    telefone: digitosTelefone,
    itens: itens,
    status: "aguardando",
    canal: "site",
    horario: firebase.firestore.FieldValue.serverTimestamp()
  };

  try {
    await db.collection("pedidos").add(pedido);
  } catch (erroFirebase) {
    // Mesmo que o registro falhe, o cliente ainda deve conseguir falar com o atendente
    console.error("Erro ao salvar pedido no Firebase:", erroFirebase);
  }

  const linkWhatsApp = montarLinkWhatsApp(nome, cnpjFormatado, itens);

  carrinho = [];
  renderizarCarrinho();
  document.querySelector(".overlay-contato").remove();

  window.location.href = linkWhatsApp;
}

function montarLinkWhatsApp(nome, cnpjFormatado, itens) {
  const listaItens = itens.map(i => `• ${i.quantidade}x ${i.nome}`).join("\n");
  const texto =
    `Olá! Meu nome é ${nome}.\n` +
    `CNPJ: ${cnpjFormatado}\n` +
    `Gostaria de um orçamento para os seguintes equipamentos:\n\n` +
    `${listaItens}\n\n` +
    `Pode me ajudar?`;

  return `https://wa.me/${NUMERO_ATENDENTE}?text=${encodeURIComponent(texto)}`;
}

renderizarProdutos(categoriaAtiva);
renderizarCarrinho();
