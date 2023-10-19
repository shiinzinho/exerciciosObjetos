class ProdutoLoja{
    nome: string;
    preco: number;

    constructor(nomeDoProduto: string, precoDoProduto: number){
        this.nome = nomeDoProduto
        this.preco = precoDoProduto
    }
}

class CarrinhoDeCompra{
    produtoDoCarrinho: ProdutoLoja[] = [];
    constructor(){
    }

    adicionarProduto(produto: ProdutoLoja){
        this.produtoDoCarrinho.push(produto);
    }

    removerProdutos(nomeDoProduto: string){
        this.produtoDoCarrinho = this.produtoDoCarrinho.filter(item => item.nome!==nomeDoProduto)
    }
    removerProdutos2(produto: ProdutoLoja){
        this.produtoDoCarrinho = this.produtoDoCarrinho.filter(item => item.nome!==produto.nome)
    }
    calcularValorTotal(){
        console.log("Preço Total do Carrinho de Compras: ")
        let soma = 0;
        this.produtoDoCarrinho.forEach(produto => {
            soma += produto.preco
    });
        return soma.toFixed(2);
    }
    exibirProdutos(){
        console.log("Produtos do Carrinho: ");
        for (let i = 0; i < this.produtoDoCarrinho.length; i++){
            console.log("Produto " + this.produtoDoCarrinho[i].nome + ': R$ ' + this.produtoDoCarrinho[i].preco.toFixed(2));
            
        }
        
    }
}

class Loja{
    produtosDoEstoque: ProdutoLoja[] = [];
    carrinhoDeCompra = new CarrinhoDeCompra();

constructor(){}

adicionarProdutosEstoque(produto: ProdutoLoja){
    this.produtosDoEstoque.push(produto);
    return "Produto Adicionado ao Estoque"
}
removerProdutosEstoque(produto: ProdutoLoja){
    this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome!==produto.nome)
}
adicionarProdutosAoCarrinhoDeCompras(produto: ProdutoLoja){
    let produtoEncontrado = this.produtosDoEstoque.find(item => item.nome === produto.nome)
    if(produtoEncontrado){
        this.carrinhoDeCompra.adicionarProduto(produtoEncontrado);
        return "Produto adicionado ao carrinho de compra"
    } else {
        return "Produto não adicionado ao carrinho de compras"
    }
}
removerProdutosDoCarrinhoDeCompra(produto: ProdutoLoja){
    this.carrinhoDeCompra.removerProdutos(produto.nome)
}
exibirProdutosDoCarrinho(){
    this.carrinhoDeCompra.exibirProdutos();
}

valorTotalDoCarrinhoDeCompras(){
    return this.carrinhoDeCompra.calcularValorTotal();
}
}   
// Criando Produtos
const produto1 = new ProdutoLoja("Carrinho", 200)
const produto2 = new ProdutoLoja("Bola", 50)
const produto3 = new ProdutoLoja("Ursinho", 100)
const produto4 = new ProdutoLoja("Boneca", 150)
const produto5 = new ProdutoLoja("Peteca", 110)

// Criando a loja
const loja = new Loja();

// Adicionando Produtos ao Estoque
console.log(loja.adicionarProdutosEstoque(produto1));
console.log(loja.adicionarProdutosEstoque(produto2));
console.log(loja.adicionarProdutosEstoque(produto3));
console.log(loja.adicionarProdutosEstoque(produto4));

// Adicionando Produtos ao Carrinho de Compras
console.log(loja.adicionarProdutosAoCarrinhoDeCompras(produto1));
console.log(loja.adicionarProdutosAoCarrinhoDeCompras(produto2));
console.log(loja.adicionarProdutosAoCarrinhoDeCompras(produto3));
console.log(loja.adicionarProdutosAoCarrinhoDeCompras(produto4));
console.log(loja.adicionarProdutosAoCarrinhoDeCompras(produto5));

// Exibindo Produtos do Carrinho de Compras
loja.exibirProdutosDoCarrinho();

// Exibindo Valor Total dos Produtos do Carrinho de Compras
console.log(loja.valorTotalDoCarrinhoDeCompras());

// Removendo Produtos do Carrinho de Compras
loja.removerProdutosDoCarrinhoDeCompra(produto1);

// Exibindo Produtos do Carrinho de Compras
loja.exibirProdutosDoCarrinho();

// Removendo Produtos do Estoque
loja.removerProdutosEstoque(produto1);

// Exibindo Valor Total dos Produtos do Carrinho de Compras
console.log(loja.valorTotalDoCarrinhoDeCompras());


