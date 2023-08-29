class Funcionario{
    nome: string
    cargo: string
    salarioBruto: number
    INSS: number
    IR: number

    constructor(nome: string, cargo: string, salarioBruto: number, INSS: number, IR: number){
        this.nome = nome
        this.cargo = cargo
        this.salarioBruto = salarioBruto
        this.INSS = INSS
        this.IR = IR
        
    }
    totalImpostos(){
        let impostoINSS = ((this.salarioBruto * this.INSS)/100)
        let novoSalario = this.salarioBruto - impostoINSS
       
        return "Valor de impostos a serem pagos: R$" + (impostoINSS+(novoSalario*this.IR)/100)
       
    }
    aplicarAumento(percentual:number){
        let aumento = (this.salarioBruto*percentual)/100
        this.salarioBruto = this.salarioBruto + aumento
        return "Aumento de " + percentual + "%." + " Novo salário: R$" + this.salarioBruto
    }
    exibirDetalheFuncionario(){
        let impostoINSS =  ((this.salarioBruto * this.INSS)/100)
        let novoSalario = this.salarioBruto - impostoINSS
        let impostos =  (impostoINSS + (novoSalario * this.IR)/100)
        let salarioLiquido = this.salarioBruto - impostos
        return "Funcionário: " + this.nome +", Salário Bruto: R$"+ this.salarioBruto.toFixed(2) + 
        ", Impostos a serem pagos: R$" + impostos.toFixed(2) + " Salario liquído: R$" + salarioLiquido.toFixed(2)
}
}
let funcionarioUm = new Funcionario('Ana Silva', 'Analista de Vendas', 3000, 11, 7.5)
console.log(funcionarioUm.totalImpostos())
console.log(funcionarioUm.aplicarAumento(10))
console.log(funcionarioUm.exibirDetalheFuncionario())
let funcionarioDois = new Funcionario('Pedro', 'Bancário', 2500, 11, 7.5)
console.log(funcionarioDois.totalImpostos())
console.log(funcionarioDois.aplicarAumento(10))
console.log(funcionarioDois.exibirDetalheFuncionario())