"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["Aguardando"] = "Aguardando Preparo";
    StatusPedido["Preparando"] = "Em Preparo";
    StatusPedido["Saindo"] = "Saiu para Entrega";
    StatusPedido["Entregado"] = "Entregue";
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
pedidos.adicionarProduto(pedido1);
pedidos.adicionarProduto(pedido2);
pedidos.exibirProdutosDoPedido();
console.log(pedidos.exibirStatus());
pedidos.atualizarStatus(StatusPedido.Saindo);
console.log(pedidos.exibirStatus());
