abstract class FuncionarioAbstrato {
    protected nome: string;
    protected salario: number;

    constructor(nome :string, salario: number){
        this.nome = nome
        this.salario = salario
    }
}
class Gerente extends FuncionarioAbstrato {
    constructor() {
        super("Miguel", 6500)
    }
    calcularSalarioMensal(): number {
        let aumento = 0.10
        let novoSalario = ((this.salario * aumento) + this.salario)
        return novoSalario
    }
}

class Desenvolvedor extends FuncionarioAbstrato {
    constructor() {
        super("Bruna", 6000)
    }
    calcularSalarioMensal(): number {
        let salarioFixo = this.salario
        return salarioFixo
    }
}
const gerente = new Gerente();
console.log("O novo salário será de: " + gerente.calcularSalarioMensal() + " reais");

const desenvolvedor = new Desenvolvedor();
console.log("O salario fixo é de: " + desenvolvedor.calcularSalarioMensal() + " reais");