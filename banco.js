"use strict";
class contaBancaria {
    constructor(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }
    exibir() {
        return 'O saldo atual de ' + this.nome
            + ' contém: R$' + this.saldo;
    }
    deposito(deposito) {
        this.saldo = this.saldo + deposito;
        return 'Um valor de R$500 foi adicionado à sua conta, o saldo atual é de: R$' + this.saldo;
    }
    saque(saque) {
        this.saldo = this.saldo - saque;
        return 'Um valor de R$500 foi sacado de sua conta, o saldo atual é de: R$' + this.saldo;
    }
    retirar(retirar) {
        this.saldo = this.saldo - retirar;
        return 'Um valor de R$500 foi retirado à sua conta, o saldo atual é de: R$' + this.saldo;
    }
    verificar() {
        return 'Bem-vindo ' + this.nome + ', seu saldo atual é de: R$' + this.saldo;
    }
}
let primeira = new contaBancaria('João', 1000);
let segunda = new contaBancaria('Enzo', 2000);
let terceira = new contaBancaria('Claudio', 3000);
console.log(primeira.exibir());
console.log(primeira.deposito(500));
console.log(primeira.saque(200));
console.log(primeira.retirar(1500));
console.log(primeira.verificar());
console.log(segunda.exibir());
console.log(segunda.deposito(500));
console.log(segunda.saque(200));
console.log(segunda.retirar(1500));
console.log(segunda.verificar());
console.log(terceira.exibir());
console.log(terceira.deposito(500));
console.log(terceira.saque(200));
console.log(terceira.retirar(1500));
console.log(terceira.verificar());
