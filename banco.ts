class contaBancaria {
    nome: string
    saldo: number
    
    constructor(nome: string, saldo: number) {
        this.nome = nome
        this.saldo = saldo
    }
    exibir(){
        return 'O saldo atual de ' + this.nome
            + ' contém: R$' + this.saldo
    }
    deposito(deposito: number){
        this.saldo = this.saldo + deposito; return 'Um valor de R$500 foi adicionado à sua conta, o saldo atual é de: R$' + this.saldo
    }
    saque(saque: number){
        this.saldo = this.saldo - saque; return 'Um valor de R$500 foi sacado de sua conta, o saldo atual é de: R$' + this.saldo 
    }
    retirar(retirar: number){
        this.saldo = this.saldo - retirar; return 'Um valor de R$500 foi retirado à sua conta, o saldo atual é de: R$' + this.saldo 
    }
    verificar(){
        return 'Bem-vindo ' + this.nome + ', seu saldo atual é de: R$' + this.saldo
    }
    }

let minhaConta = new contaBancaria('João', 1000)
let segundaConta = new contaBancaria('Enzo', 2000)
let terceiraConta = new contaBancaria('Claudio', 3000)
console.log(minhaConta.exibir())
console.log(minhaConta.deposito(500))
console.log(minhaConta.saque(200))
console.log(minhaConta.retirar(1500))
console.log(minhaConta.verificar())
console.log(segundaConta.exibir())
console.log(segundaConta.deposito(500))
console.log(segundaConta.saque(200))
console.log(segundaConta.retirar(1500))
console.log(segundaConta.verificar())
console.log(terceiraConta.exibir())
console.log(terceiraConta.deposito(500))
console.log(terceiraConta.saque(200))
console.log(terceiraConta.retirar(1500))
console.log(terceiraConta.verificar())