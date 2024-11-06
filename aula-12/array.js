let lang = "Python";
console.log(lang);
console.log(lang[5]);
console.log(lang[0]);

let numero = 5;
let numeros = [2, 3, 4, 5];
console.log(numeros);
console.log(numeros[2]);

numeros[2] = 14;
console.log(numero);

numeros.push(3);
console.log(numeros);

console.log(numeros[12]);
console.log(numeros.length);

let last = numeros.length - 1;
console.log("ultimo" , numeros[last]);

let mistura = []
const nomes = ["leonardo", "wesley", "paulo", "igor", "larissa"]
console.log("Bem vindo (a)", nomes);
const tamanho = nomes. length;
for (let i = 0; i < tamanho; i++)
    {
console.log("bem vindo", nomes[i]);
}

for (let nome of nomes) {
    console.log("bem vindo", nome);
}