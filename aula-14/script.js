function saudacao(nome, curso) {
  console.log(`Ola, ${nome}. bem vindo ao curso  ${curso}`);
}

saudacao("leonardo", "full stack");

function soma(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
}

soma(5, 8);
soma(10, 12);
soma(53, 7);

const mediaAluno = calcularMedia(6, 8, 9);
function calcularMedia(n1, n2, n3) {
  const media = (n1 + n2 + n3) / 3;
  return media;
}
if (mediaAluno < 7) {
  console.log("reprovado.");
} else {
  console.log("aprovado.");
}

calcularMedia(6, 8, 9);

function obterDiaSemana(dia) {
  switch (dia) {
    case 1:
      return "domingo";
    case 2:
      return "segunda";
    case 3:
      return "terça";
    case 4:
      return "quarta";
    case 5:
      return "quinta";
    case 6:
      return "sexta";
    case 7:
      return "sabado";
  }
}

console.log(obterDiaSemana(4));

function calcularIMC(peso, altura) {
  return peso / altura ** 2;
}
const imc1 = calcularIMC(70);
console.log(imc1);

const imc2 = calcularIMC(70, 1.8);
console.log(imc2);

function despedir(nome = "amigo") {
  console.log(`ate logo, ${nome}!`);
}

despedir();
despedir("leonardo");

function calcularAreaCirculo(raio) {
  if (raio == undefined) {
    throw new Error("raio do circulo nao foi definido.");
  }
  return 3.14 * raio ** 2;
}

console.log(calcularAreaCirculo(10));
console.log(calcularAreaCirculo(2));

function subtrair(n1, n2) {
  return n1 - n2;
}

const somar = function (n1, n2) {
  return n1 + n2;
};

console.log(subtrair(10, 5));
console.log(somar(10, 5));

const numeros = [3, 6, 9, 4, 1, 7];

numeros.forEach(function (n) {
  console.log(n);
});

const funcaSemSeta = function () {};
const funcaoComSeta = () => {};

numeros.forEach((n) => {
  console.log(n);
});

numeros.forEach((n) => console.log(n));

const ola = () => console.log("ola!");
ola();

function potencia(base, expoente) {
  return base ** expoente;
}

const potenciaArrow = (base, expo) => base ** expo;

console.log(potencia(3, 4));
console.log(potenciaArrow(3, 4));

//*****************************************

//questao 01

function dobro(a) {
  return a * 2;
}
console.log(dobro(4)); // 8
console.log(dobro(6)); // 12
console.log(dobro(8)); // 16

// questao 02

constCubo = {
  send: (message) => console.log(message),
};
const createExpo = (sender) => (a) => sender.send(a ** 3);

constCubo = createExpo(constCubo);

constCubo(2); // 8
constCubo(3); // 27

// questao 03

function calculaDesconto(valor, porct = 0.05) {}
console.log(calculaDesconto(5));
console.log(calculaDesconto(10, 0.25));

// questao 04

const soma = (n1, n2) => n1 + n2;
const subt = (n1, n2) => n1 - n2;
const mult = (n1, n2) => n1 * n2;

function executaOperacao(n1, n2, operacao) {
  return operacao(n1, n2);
}
console.log(executaOperacao(5, 10, soma));
console.log(executaOperacao(35, 10, subt));
console.log(executaOperacao(7, 4, mult));

// questao 05

const numeros = [1, 2, 3, 4, 5];
numeros.forEach((n) => {
  console.log(dobro(n));
});
