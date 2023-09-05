"use strict";
class Evento {
    constructor(nome, data, hora) {
        this.nome = nome;
        this.data = data;
        this.hora = hora;
    }
}
class Agenda {
    constructor() {
        this.eventos = [];
    }
    adicionarEventos(evento) {
        this.eventos.push(evento);
    }
    listarEventos() {
        console.log('Meu(s) evento(s) ');
        for (let i = 0; i < this.eventos.length; i++) {
            console.log(this.eventos[i].nome + " na data " + this.eventos[i].data + " às " + this.eventos[i].hora);
        }
    }
    apagarEventos(evento) {
        this.eventos = this.eventos.filter(item => item.nome != evento.nome);
        return "Evento apagado";
    }
}
const evento1 = new Evento("Hallooween", "10", "20h");
const evento2 = new Evento("Festa", "04", "22h");
const evento3 = new Evento("Show", "01", "23h");
const meusEventos = new Agenda();
meusEventos.adicionarEventos(evento1);
meusEventos.adicionarEventos(evento2);
meusEventos.adicionarEventos(evento3);
console.log(meusEventos.listarEventos());
console.log("");
console.log(meusEventos.apagarEventos(evento3));
console.log(meusEventos.listarEventos());
