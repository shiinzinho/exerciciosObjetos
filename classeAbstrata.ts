abstract class Animal {
    private nome: string;
    private qtdPatas: number;

    constructor(nome: string, qtdpatas: number) {
        this.nome = nome
        this.qtdPatas = qtdpatas
    }

    abstract fazerBarulho(): void;

    apresentar(): void {
        console.log("Este é um " + this.nome + " com " + this.qtdPatas + " patas");
    }
}

class Dog extends Animal {
    constructor() {
        super("Cachorro", 4)
    }


    fazerBarulho(): void {
        console.log("O cachorro está latindo");

    }
}
    
class Cat extends Animal {
    constructor() {
        super("Gato", 4)
    }

    fazerBarulho(): void {
        console.log("O gato está miando");

    }
}

class Bird extends Animal {
    constructor() {
        super("Pássaro", 2)
    }

    fazerBarulho(): void {
        console.log("O pássaro está cantando");

    }
}
const labrador = new Dog();
labrador.apresentar();
labrador.fazerBarulho();

const gato = new Cat();
gato.apresentar();
gato.fazerBarulho();

const passaro = new Bird();
passaro.apresentar();
passaro.fazerBarulho();