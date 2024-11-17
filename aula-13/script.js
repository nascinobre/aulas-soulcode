const linguagem = "JavaScript";
console.log(linguagem[0]); // J
for (let letra of linguagem){
    console.log(letra);
}

console.log(linguagem);
console.log(linguagem.toLowerCase()); // minusculo
console.log(linguagem.toUpperCase()); // maiusculo
console.log(linguagem.endsWith("Script")); // true
console.log(linguagem.startsWith("Java")); //false
console.log(linguagem.includes("va")); // true
console.log(linguagem.indexOf("a")); // 1
console.log(linguagem.lastIndexOf("a")); // 3
console.log(linguagem.replace("Java", "Type")); // TypeScript
console.log(linguagem.slice(2, 7)); // vaScr

const nome ="leonardo nobre";
const curso =" full stack";
console.log("bem vindo" ,nome,  "ao curso", curso);

const numero1 = 45;
const numero2 = 15;
console.log('a soma de &{numero1} e ${numero2} e igual a {numero1 +numero2}');

const pessoa = {
    nome: "leonardo nobre", dataNascimento: "27/10/1965",cpf: "973.276.977.72",
    altura: 1.76, corCabelo: "branco"
};
console.log(pessoa);
console.log(pessoa.corCabelo);
console.log(pessoa.curso);
pessoa.email = "nobreleonardo@hotmail.com";
console.log(pessoa);
delete pessoa.cpf;
console.log(pessoa);

let a1 = {nome: "Joao"};
let a2 = a1;
a2.nome ="maria";
console.log(a1, a2);
console.log(a1, a2);





