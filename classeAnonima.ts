const nomeCompleto = new class {
    private primeiroNome = "José";
    private ultimoNome = "da Silva";
    getNomeCompleto(){
        return this.primeiroNome + " " + this.ultimoNome
    }
}
console.log(nomeCompleto.getNomeCompleto())

const nomeCompleto1 = {
     primeiroNome: "José",
     ultimoNome: "da Silva",
    getNomeCompleto: function(){
        return this.primeiroNome + " " + this.ultimoNome
    }
}
console.log(nomeCompleto1.getNomeCompleto())

const treinadorPessoal = new class{
    private rotina: {nome: string; duracao: number}[] = [];

    adicionarExercicios(nome:string, duracao: number): void{
        this.rotina.push({nome, duracao})
    }
    calcularTempoReal(): number{
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao)
        //this.rotina.forEach(item => soma = item.duracao)
        return soma;
    }
}
treinadorPessoal.adicionarExercicios("Corrida", 30)
treinadorPessoal.adicionarExercicios("Flexões", 15)
treinadorPessoal.adicionarExercicios("Agachamentos", 20)
console.log("Tempo total necessário para a rotina: " + treinadorPessoal.calcularTempoReal() + " em minutos")