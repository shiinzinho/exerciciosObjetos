"use strict";
class produto {
    constructor(Produto, valor, desconto) {
        this.Produto = Produto;
        this.valor = valor;
        this.desconto = desconto;
    }
    exibir() {
        return 'Produto: ' + this.Produto
            + ', Preço: ' + this.valor;
    }
    newValor() {
        return 'O produto custa ' + this.valor + ', com o desconto ele custará: ' + (this.valor - (this.valor / 100 * this.desconto));
    }
}
let primeiraCompra = new produto('PC', 5000, 20);
let segundaCompra = new produto('Celular', 2000, 20);
let terceiraCompra = new produto('Impressora', 500, 20);
console.log(primeiraCompra.exibir());
console.log(primeiraCompra.newValor());
console.log(segundaCompra.exibir());
console.log(segundaCompra.newValor());
console.log(terceiraCompra.exibir());
console.log(terceiraCompra.newValor());
