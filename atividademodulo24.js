// Classe base
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = typeof preco === 'number' ? preco : parseFloat(preco);
    }

    getPreco() {
        return this.preco;
    }

    setPreco(valor) {
        if (typeof valor === 'number') {
            this.preco = valor;
        }
    }

    getDescricao() {
        return `${this.nome}: R$${this.preco.toFixed(2)}`;
    }
}

// Classe derivada para produtos alimentícios
class ProdutoAlimento extends Produto {
    constructor(nome, preco, validade) {
        super(nome, preco);
        this.validade = validade;
    }

    getDescricao() {
        return `${super.getDescricao()}, Validade: ${this.validade}`;
    }
}

// Classe derivada para produtos eletrônicos
class ProdutoEletronico extends Produto {
    constructor(nome, preco, garantia) {
        super(nome, preco);
        this.garantia = garantia;
    }

    getDescricao() {
        return `${super.getDescricao()}, Garantia: ${this.garantia} anos`;
    }
}

// Instâncias de produtos
const arroz = new ProdutoAlimento('Arroz', 20, '2024-12-31');
const feijao = new ProdutoAlimento('Feijão', 15, '2024-12-30');
const tv = new ProdutoEletronico('TV 50"', 2000, 2);

console.log(arroz.getDescricao());       // Arroz: R$20.00, Validade: 2024-12-31
console.log(feijao.getDescricao());       // Feijão: R$15.00, Validade: 2024-12-30
console.log(tv.getDescricao());           // TV 50": R$2000.00, Garantia: 2 anos

// Soma dos preços
const somaPrecos = (produtos) => produtos.reduce((total, produto) => total + produto.getPreco(), 0);

const produtos = [arroz, feijao, tv];
console.log('Preço total dos produtos:', somaPrecos(produtos)); 
