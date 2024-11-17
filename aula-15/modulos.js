import{ multiplicar as mult, dividir} from "./calculadora.js";
import calculadora from "./calculadora.js";

// bibliotecas / modulos

// Math. tan, sin, cos
console.log(Math.sqrt(25));
console.log(Math.floor(4.4));
console.log(Math.floor(4.4));
console.log(Math.ceil(100/3));
console.log(Math.round(4.4));
console.log(Math.cos(0.7));
console.log(Math.pow(6, 3));
console.log(Math.cbrt(64));
const rand = Math.random();
console.log(Math.floor(rand*10)+1);

console.log(mult(4, 5));

console.log(dividir(21,3));
console.log(calculadora(23, 23));

// funcoes recursivas
// fatorial !5 5 * 4 * 3 * 2 *1;
function fatorial(numero){
    if (numero ==1){
        return 1;
    }else {
       return numero * fatorial(numero-1);
    }
}
console.log(fatorial(5));