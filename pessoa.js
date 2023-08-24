"use strict";
class pessoa {
    constructor(nome, idade, comidas) {
        this.nome = nome;
        this.idade = idade;
        this.comidas = comidas;
    }
    cumprimentar() {
        let habilitacao = ' e ja posso tirar minha CNH';
        if (this.idade < 18) {
            habilitacao = ' e não posso tirar minha habilitacao';
        }
        return 'iai, meu nome é ' + this.nome
            + ' tenho ' + this.idade
            + ' anos' + habilitacao + '.';
    }
    comidasFav() {
        console.log('minha(s) comida(s) favorita(s): ');
        for (let i = 0; i <= this.comidas.length; i++) {
            console.log(this.comidas[i]);
        }
    }
}
let pessoaUm = new pessoa('gabriel', 17, ['strogonoff', 'lasanha', 'pizza']);
console.log(pessoaUm.cumprimentar());
