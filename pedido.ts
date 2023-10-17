enum StatusPedido{
    Aguardando = "Aguardando Preparo",
    Preparando = "Em Preparo",
    Saindo = "Saiu para Entrega",
    Entregado = "Entregue"

    const
}
class ProdutoPedido{
    nome: string;
    valor: number;

    constructor(nome:string, valor:number){
        this.nome = nome;
        this.valor = valor
    }
}

class Pedido {
 // private produtos: {nome:string, valor:number} [];
    private produtos: ProdutoPedido[];
    private status: StatusPedido;

    constructor(){
		this.produtos = [];
		this.status = StatusPedido.Aguardando;
	}
    adicionarProduto(produto: ProdutoPedido){
        this.produtos.push(produto);
    }
    
    atualizarStatus(status: StatusPedido){
        this.status = status
    }

    exibirStatus(){
        return 'Status: ' + this.status
    }

    exibirProdutosDoPedido(){
        console.log('Meu(s) pedido(s)')
        for(let i=0; i < this.produtos.length; i++){
        console.log("Produto: " + this.produtos[i].nome + " Preço: " +  this.produtos[i].valor);
    }
    }
}

const pedido1 = new ProdutoPedido('Celular', 2000);
const pedido2 = new ProdutoPedido('Tablet', 4000);

const pedidos = new Pedido();
console.log(pedidos.adicionarProduto(pedido1));
console.log(pedidos.adicionarProduto(pedido2));
console.log(pedidos.exibirProdutosDoPedido());
console.log(pedidos.exibirStatus());
console.log(pedidos.atualizarStatus(StatusPedido.Saindo));
console.log(pedidos.exibirStatus());

