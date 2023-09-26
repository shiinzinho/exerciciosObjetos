"use strict";
class ContaBancaria {
    constructor(numeroConta, saldoInicial, titular) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
        this.titular = titular;
    }
}
class ContaCorrente extends ContaBancaria {
    constructor(limiteChequeEspecial) {
        super("1", 1000, "Carlos");
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    depositar(valor) {
        this.saldo = (this.saldo + this.limiteChequeEspecial);
        this.saldo = this.saldo + valor;
        console.log("O novo saldo após o depósito é de R$ " + this.saldo);
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            console.log("O novo saldo após o saque é de R$ " + (this.saldo = this.saldo - valor));
        }
        else {
            console.log("Saque negado! Você não possui o valor declarado");
        }
    }
    consultarSaldo() {
        console.log("O saldo atual é de R$ " + this.saldo);
        return this.saldo;
    }
}
const corrente = new ContaCorrente(5000);
corrente.depositar(1000);
corrente.sacar(500);
corrente.consultarSaldo();
corrente.sacar(500);
