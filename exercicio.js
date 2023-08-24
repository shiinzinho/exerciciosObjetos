"use strict";
class exercicio {
    constructor(nome, valor, desconto) {
        this.nome = nome;
        this.valor = valor;
        this.desconto = desconto;
    }
    exibir() {
        return 'Produto: ' + this.nome
            + ', Preço: ' + this.valor;
    }
    newValor() {
        return 'O produto custa ' + this.valor + ', com o desconto ele custará: ' + (this.valor - (this.valor / 100 * this.desconto));
    }
}
let produtoUm = new exercicio('PC', 5000, 20);
let produtoDois = new exercicio('Celular', 2000, 20);
let produtoTres = new exercicio('Impressora', 500, 20);
console.log(produtoUm.exibir());
console.log(produtoUm.newValor());
console.log(produtoDois.exibir());
console.log(produtoDois.newValor());
console.log(produtoTres.exibir());
console.log(produtoTres.newValor());
