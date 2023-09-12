"use strict";
class ProdutoLoja {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class CarrinhoDeCompras {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    apagarProdutos(produto) {
        this.produtos = this.produtos.filter(item => item.nome != produto.nome);
    }
    /* precoTotal(){
        console.log("Preço de Todos os Produtos");
        let soma = 0;
        for(let i=0; i < this.produtos.length; i++){
            soma = soma + this.produtos[i].preco;
        }
        console.log(soma)
    } */
    precoTotalEach() {
        console.log("Preço de Todos os Produtos");
        let soma = 0;
        this.produtos.forEach(produto => {
            soma = soma + produto.preco;
        });
        return soma.toFixed(2);
    }
}
class Loja {
    constructor() {
        this.estoques = [];
        this.carrinhoCompras = new CarrinhoDeCompras();
    }
    adicionarEstoque(estoque) {
        this.estoques.push(estoque);
        return "Estoque adicionado";
    }
    apagarEstoque(estoque) {
        this.estoques = this.estoques.filter(item => item.nome != estoque.nome);
        return "Produto removido do estoque";
    }
    adicionarCarrinho(produto) {
        let encontrarProduto = this.estoques.find(estoque => estoque.nome == produto.nome);
        if (encontrarProduto) {
            this.carrinhoCompras.adicionarProduto(produto);
            return "Produto adicionado ao carrinho de compras";
        }
        else {
            return "Produto não encontrado no estoque";
        }
    }
    exibirPrecoCarrinho() {
        return this.carrinhoCompras.precoTotalEach();
    }
    exbirTotalCarrinho() {
        console.log('Meu(s) item(s)');
        for (let i = 0; i < this.estoques.length; i++) {
            console.log("Produto: " + this.estoques[i].nome + " Preço: " + this.estoques[i].preco);
        }
    }
    removerCarrinho(estoque) {
        return this.carrinhoCompras.apagarProdutos(estoque);
    }
}
const produto1 = new ProdutoLoja("Carrinho", 200);
const produto2 = new ProdutoLoja("Bola", 50);
const produto3 = new ProdutoLoja("Ursinho", 100);
const produto4 = new ProdutoLoja("Boneca", 150);
const produto5 = new ProdutoLoja("Peteca", 110);
const loja = new Loja();
console.log(loja.adicionarEstoque(produto1));
console.log(loja.adicionarEstoque(produto2));
console.log(loja.adicionarEstoque(produto3));
console.log(loja.adicionarEstoque(produto4));
console.log(loja.adicionarCarrinho(produto1));
console.log(loja.adicionarCarrinho(produto2));
console.log(loja.adicionarCarrinho(produto3));
console.log(loja.adicionarCarrinho(produto4));
console.log(loja.adicionarCarrinho(produto5));
console.log(loja.exbirTotalCarrinho());
console.log(loja.exibirPrecoCarrinho());
console.log(loja.apagarEstoque(produto1));
console.log(loja.removerCarrinho(produto1));
console.log(loja.exbirTotalCarrinho());
console.log(loja.exibirPrecoCarrinho());