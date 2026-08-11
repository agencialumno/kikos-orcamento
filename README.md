# Kikos - Site de Escolha de Equipamentos

Adaptado do repositório `kikos-totem` (totem físico de loja) para um site remoto:
o cliente monta o pedido, informa nome + WhatsApp, e é redirecionado direto
para o WhatsApp do Jean com a lista de equipamentos escolhidos.

## O que mudou em relação ao totem original

- **Sem preços em lugar nenhum**: catálogo, modal de quantidade e carrinho não
  mostram preço, parcelamento ou desconto — só o equipamento e a quantidade.
- **Sem splash screen** ("toque para começar"): o site abre direto no catálogo,
  já que o objetivo é converter clique de anúncio/Instagram, não engajar num
  totem parado numa loja.
- **Sem botão "Chamar atendente"**: esse botão fazia sentido no totem físico
  (atendente vem até o cliente na loja). Removido.
- **Sem tela de "senha de balcão"**: no lugar, um modal pede nome, CNPJ e
  WhatsApp do cliente e, ao confirmar, redireciona para `wa.me` com uma
  mensagem pronta listando os itens escolhidos, endereçada ao Jean.
- **Painel do atendente (`painel.html`)** foi mantido e atualizado: mostra nome
  e um botão "Abrir WhatsApp" para pedidos vindos do site, e continua
  compatível com pedidos antigos do totem físico (que têm senha/preço).

## Estrutura

```
index.html          → catálogo + carrinho (site do cliente)
painel.html          → painel de pedidos em tempo real (uso interno)
css/style.css         → estilos do site do cliente
css/painel.css        → estilos do painel
js/produtos.js        → catálogo de produtos (sem preço)
js/app.js             → lógica do site (carrinho, modal de contato, redirecionamento)
js/painel.js          → lógica do painel
js/firebase.js         → configuração do Firebase (mesmo projeto do totem)
assets/images/         → logos, ícones de categoria e fotos de produto
```

## Configuração

O número do atendente que recebe o pedido está no topo de `js/app.js`:

```js
const NUMERO_ATENDENTE = "5521964091530"; // Jean
```

Troque esse valor se precisar direcionar para outro número no futuro.

## Como os pedidos são salvos

Cada pedido é gravado na coleção `pedidos` do mesmo projeto Firebase do totem
(`kikos-totem`), com um campo `canal: "site"` para diferenciar dos pedidos do
totem físico (`canal` ausente = totem). Formato:

```js
{
  nome: "Maria",
  cnpj: "12345678000199",
  telefone: "21999998888",
  itens: [{ nome: "Esteira Ergométrica Kikos E900...", quantidade: 1 }],
  status: "aguardando",
  canal: "site",
  horario: <timestamp>
}
```

## Publicando

Como é um site 100% estático (HTML/CSS/JS, sem build), pode subir em qualquer
hospedagem de arquivos estáticos:

- **GitHub Pages**: mais simples, grátis, dá pra usar o próprio repo.
- **Render (Static Site)**: já que você já usa Render pro n8n, mantém tudo no
  mesmo painel.

## Próximo passo: notificação automática pro Jean via n8n

Hoje a notificação do Jean depende do cliente efetivamente apertar "Enviar"
no WhatsApp que abre. Pra garantir que ele seja avisado mesmo que o cliente
feche a aba antes de enviar, dá pra adicionar uma segunda chamada em
`enviarPedido()` (em `js/app.js`), logo depois do `db.collection("pedidos").add(pedido)`:

```js
fetch("https://kikos-bot.onrender.com/webhook/pedido-site", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(pedido)
});
```

E no n8n: um novo Webhook node nesse endpoint → formatar os itens → nó de envio
via WhatsApp Cloud API direto pro número do Jean. Fica pronto pra plugar
quando você quiser — não implementei agora porque você pediu pra manter só o
Firebase por enquanto.
