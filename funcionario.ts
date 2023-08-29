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
    aumento(INSS: number){
        this.salarioBruto = this.salarioBruto +  ((this.salarioBruto/100) * INSS);
        let salarioAntigo = ((this.salarioBruto * 100)/110)
        return this.nome + ' recebe ' + salarioAntigo + ', mas hoje ele recebeu um aumento de 10% em seu salário. Novo salário: R$' + this.salarioBruto
     }
    exibir(){
        let impostos = (((this.salarioBruto * this.INSS)/100) + ((this.salarioBruto * this.IR)/100))
        let salarioLiquido = (this.salarioBruto - (((this.salarioBruto * this.INSS)/100) + ((this.salarioBruto * this.IR)/100)))
        return 'Funcionário XPTO: ' + this.nome + ', Salário Bruto: R$' + this.salarioBruto 
        + ', Impostos a serem pagos: R$' + impostos + ', Salário Liquido: R$' 
        + salarioLiquido
     }
}
let funcionarioUm = new Funcionario('Ana Silva', 'Analista de Vendas', 3000, 11, 7.5)
console.log(funcionarioUm.aumento(10))
console.log(funcionarioUm.exibir())
let funcionarioDois = new Funcionario('Pedro', 'Bancário', 2500, 11, 7.5)
console.log(funcionarioDois.aumento(10))
console.log(funcionarioDois.exibir())