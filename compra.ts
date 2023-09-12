class ProdutoLoja {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
}
class CarrinhoDeCompras {
    private produtos: ProdutoLoja[] = [];

    constructor() {}

    adicionarProduto(produto: ProdutoLoja) {
        this.produtos.push(produto);
    }
    apagarProdutos(produto: ProdutoLoja) {
        this.produtos = this.produtos.filter(item =>item.nome!= produto.nome);
    }
    /* precoTotal(){
        console.log("Preço de Todos os Produtos");
        let soma = 0;
        for(let i=0; i < this.produtos.length; i++){
            soma = soma + this.produtos[i].preco;
        }
        console.log(soma)
    } */
    precoTotalEach(){
        console.log("Preço de Todos os Produtos");
        let soma = 0;
        this.produtos.forEach(produto => {
                soma = soma + produto.preco
        })
        return soma.toFixed(2);
    }
}
class Loja {
    private estoques: ProdutoLoja[] = [];
    private carrinhoCompras = new CarrinhoDeCompras();

    constructor() {}

    adicionarEstoque(estoque: ProdutoLoja) {
        this.estoques.push(estoque);
        return "Estoque adicionado"
    }
    apagarEstoque(estoque: ProdutoLoja) {
        this.estoques = this.estoques.filter(item =>item.nome!= estoque.nome);
    }
    adicionarCarrinho(produto: ProdutoLoja){
        let encontrarProduto = this.estoques.find(estoque => estoque.nome == produto.nome);
        if(encontrarProduto){
            this.carrinhoCompras.adicionarProduto(produto)
            return "Produto adicionado ao carrinho de compras"
        } else {
            return "Produto não encontrado no estoque"
        }
    }
    exibirPrecoCarrinho(){
        return this.carrinhoCompras.precoTotalEach()
        
    }
}

    const produto1 = new ProdutoLoja("Carrinho", 2)
    const produto2 = new ProdutoLoja("Bola", 1)
    const produto3 = new ProdutoLoja("Ursinho", 1)
    const produto4 = new ProdutoLoja("Boneca", 1)

const loja = new Loja();

console.log(loja.adicionarEstoque(produto1));
console.log(loja.adicionarEstoque(produto2));
console.log(loja.adicionarEstoque(produto3));
console.log(loja.adicionarEstoque(produto4));
console.log(loja.adicionarCarrinho(produto1));
console.log(loja.adicionarCarrinho(produto2));
console.log(loja.adicionarCarrinho(produto3));
console.log(loja.adicionarCarrinho(produto4));
console.log(loja.exibirPrecoCarrinho())