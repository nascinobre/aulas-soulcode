
const pessoa = {
    nome : "leonardo",
    idade : 60,
    cumprimentar:function () {
        console.log(`ola meu nome e ${this.nome}`);
    }

}
console.log(pessoa);
pessoa.cumprimentar()

// funcoes construtores - funcao que cria um novo objeto (instancia)

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}
const pessoa2 = new Pessoa("leonardo", 60);
console.log(pessoa2);

// operador spread
const produto = {
    descricao:"galinha  vermelha",
    preco : 60,
    categoria: "aves",

    }

console.log(produto.descricao);


// desestruturacao

const produto3 = {
    descricao: "galinha rodhe",
    preco: 80
};

const { descricao, preco } = produto3
console.log(preco);
console.log(descricao);

const pessoa3 ={
    nome: "leonardo",
    endereco:{
        rua: "rua das andorinhas",
        UF:"RJ"
    }
};

const { nome, endereco:{rua, UF}} =pessoa3

console.log(nome);
console.log(rua);
console.log(UF);

const venda = {
    cliente : "Leonardo",
    data: "11/12/2024",
    nota: {
        codigo:"213456789",
        tipo:"XXL"
    }

}
const{ cliente, nota:{codigo}} = venda;
console.log("cliente:", cliente);
console.log("codigo da nota:", codigo);

const nomes = ["leo","agatha","esther"];
const[primeiro, segundo, terceiro] = nomes;
console.log(terceiro);
console.log(segundo);

const tarefas = [
    {desc: "estudar java"

    },{
        desc: "limpar quintal"
    },

];

const [p, {desc}]= tarefas;
console.log(tarefas[0].desc);
console.log(desc);

const nomes2 =[...nomes];

console.log(nomes);