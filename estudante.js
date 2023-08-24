"use strict";
class estudante {
    constructor(nome, idade, notasObtidas) {
        this.nome = nome;
        this.idade = idade;
        this.notasObtidas = notasObtidas;
    }
    notas() {
        let soma = 0;
        let resultado = '';
        let media = 0;
        for (let i = 0; i < this.notasObtidas.length; i++) {
            soma = soma + this.notasObtidas[i];
        }
        media = soma / this.notasObtidas.length;
        if (this.idade < 7) {
            resultado = this.nome + ', sua média é ' + this.notasObtidas + ' e você precisa estudar mais para melhorar seu desempenho.';
        }
        resultado = '"Parabéns, ' + this.nome + '! Sua média é ' + media + ' e você está aprovado(a).';
        return resultado;
    }
}
let primeiro = new estudante('maria', 20, [8, 7.5, 9.2, 6.8, 9.5]);
console.log(primeiro.notas());
