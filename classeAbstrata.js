"use strict";
class Animal {
    constructor(nome, qtdpatas) {
        this.nome = nome;
        this.qtdPatas = qtdpatas;
    }
    apresentar() {
        console.log("Este é um " + this.nome + " com " + this.qtdPatas + " patas");
    }
}
class Dog extends Animal {
    constructor() {
        super("Cachorro", 4);
    }
    fazerBarulho() {
        console.log("O cachorro está latindo");
    }
}
class Cat extends Animal {
    constructor() {
        super("Gato", 4);
    }
    fazerBarulho() {
        console.log("O gato está miando");
    }
}
class Bird extends Animal {
    constructor() {
        super("Pássaro", 2);
    }
    fazerBarulho() {
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
