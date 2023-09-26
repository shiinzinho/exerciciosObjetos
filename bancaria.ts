abstract class ContaBancaria {
    protected numeroConta: string;
    protected saldo: number;
    protected titular: string;

    constructor(numeroConta :string, saldoInicial: number, titular: string){
        this.numeroConta = numeroConta
        this.saldo = saldoInicial
        this.titular = titular
    }

    abstract depositar(valor: number): void 
    abstract sacar(valor: number): void
    abstract consultarSaldo(): number;
}
class ContaCorrente extends ContaBancaria {

    protected limiteChequeEspecial: number;


    constructor(limiteChequeEspecial: number){
        super("1", 1000, "Carlos");
        this.limiteChequeEspecial = limiteChequeEspecial
    }
    depositar(valor: number): void {
        this.saldo = (this.saldo + this.limiteChequeEspecial)
        this.saldo = this.saldo + valor
        console.log("O novo saldo após o depósito é de R$ " + this.saldo);
    }
    sacar(valor: number): void {
        if (valor <= this.saldo){
        console.log("O novo saldo após o saque é de R$ " + (this.saldo = this.saldo - valor));
        } else {
            console.log("Saque negado! Você não possui o valor declarado");
        } 
    }
    consultarSaldo(): number {
        console.log("O saldo atual é de R$ " + this.saldo)
        return this.saldo 
        
    }
}
const corrente = new ContaCorrente(5000);
corrente.depositar(1000);
corrente.sacar(500);
corrente.consultarSaldo();
corrente.sacar(500);