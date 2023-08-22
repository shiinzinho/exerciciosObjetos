class cachorro{
    nome: string;
    raca: string;
    idade: number;

    constructor(nome: string, raca: string, idade: number){
        this.nome = nome
        this.raca = raca
        this.idade = idade
    }

    apresentar(){
        return 'oi, eu sou '
         + this.nome + ' um ' 
         + this.raca + ' de ' 
         + this.idade + ' anos'
     }
     apresentarPara(pessoa: string){
        return 'iai ' + pessoa + ', satisfação em conhece-lo, sou '
         + this.nome + ' um '
         + this.raca + ' de ' 
         + this.idade + ' anos'
     }
}
let rex = new cachorro('rex', 'labrador', 3)
let thor = new cachorro('thor', 'bulldog', 5)
let spike = new cachorro('spike', 'bulldog', 5)


console.log(rex.nome)
console.log(thor.nome)
console.log(spike.nome)
console.log(rex.apresentar())
console.log(thor.apresentar())
console.log(spike.apresentarPara('gabriel'))