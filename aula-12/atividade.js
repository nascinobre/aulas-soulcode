// 1. Crie um programa que receba um vetor de números e mostre a soma de todos os elementos. Utilize um loop while para percorrer o vetor e somar cada elemento.

let numeros = [12, 90, 22, 17, 56, 49, 46, 34, 10]
let i = 0;
let tamanho = numeros.length;
let soma = 0;

while (i < tamanho)
 {
    soma += numeros[i];
    i++
 }
 console.log("soma" , soma);

// *************

let index = 0;
let pares = [];
let tam = numeros. lenght
while ( index < tamanho) {
    const numero = numeros[index];
    if (numero % 2 ==0)
    if (numeros[index] % 2 == 0) { pares.push(numeros[index]);

    }
    index++;
}
console.log("pares", pares)
console.log("tamanho", pares.length);

// *********

let supermercado = ["pao", "leite", "cafe"];
for(let item of supermercado)
{
    console.log("item", item);

}

// ************

let multiplicador = 3;
let fatores = [5,9, 12, 17,50, 38, 42, 71];
let resultados = [];
for (let fator of fatores) { resultados. push(fator * multiplicador);

}
console.log(resultados);

// *********

let nums = [45, 676, 23, 98, 50, 123];
let maior = 0;
for (let num of nums) {
if (maior < num) { maior = num;

}
}
console.log("maior", maior);

