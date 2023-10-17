"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["Aguardando"] = "Aguardando Preparo";
    StatusPedido["Preparando"] = "Em Preparo";
    StatusPedido["Saindo"] = "Saiu para Entrega";
    StatusPedido["Entregado"] = "Entregue";
    StatusPedido[StatusPedido["const"] = void 0] = "const";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.produtos = [];
        this.status = StatusPedido.Aguardando;
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStatus() {
        return 'Status: ' + this.status;
    }
    exibirProdutosDoPedido() {
        console.log('Meu(s) pedido(s)');
        for (let i = 0; i < this.produtos.length; i++) {
            console.log("Produto: " + this.produtos[i].nome + " Preço: " + this.produtos[i].valor);
        }
    }
}
const pedido1 = new ProdutoPedido('Celular', 2000);
const pedido2 = new ProdutoPedido('Tablet', 4000);
const pedidos = new Pedido();
console.log(pedidos.adicionarProduto(pedido1));
console.log(pedidos.adicionarProduto(pedido2));
console.log(pedidos.exibirProdutosDoPedido());
console.log(pedidos.exibirStatus());
console.log(pedidos.atualizarStatus(StatusPedido.Saindo));
console.log(pedidos.exibirStatus());
