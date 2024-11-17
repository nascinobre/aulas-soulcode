
let idade = 15;
let autorizacaoPais = true;

if (idade >= 18 ||  autorizacaoPais) {
    console.log("pode viajar.");
}
else {
    console.log("nao pode viajar.");
}
console.log("depois do IF/else.");
let clima = "ensolarado";

if (clima == "ensolarado")
{console.log("hoje vou fazer compras");}
else if(clima == "nublado")
{console.log("hoje vou pescar!");
} 
else {console.log("hoje vou dormir!"); }

let n =37;
if(n >40 || false); 
console.log("pegadinha!");

let num = 55;
console.log((num % 2 == 0) ?"par" : "impar");

console.log((num < 0) ? "negativo" : "positivo");
let dia = 5;

switch (dia) {
    case 1:
        console.log("domingo");
        break
    case 2:
        console.log("segunda");
        break
    case 3:
        console.log("terca");
        break
    case 4:
        console.log     ("quarta"); 
        break       
    case 5:
        console.log("quinta");
        break
    
    case 6:
        console.log("sexta");
        break
    case 7:
        console.log("sabado");
        break
        default:
            console.log("este dia nao existe");
}

// considere tres numeros diferentes, construa um programa e determine quem sera o maior o menor e o intermediario.

let a = 17, b = 24, c = 2
console.log( (c,a, b),(((a))), (b),);

a> b > c
    if(a > b) 
    if (a>c && b > c){
        console.log(a, ">", b, ">", c); 
    } else { console.log(c, ">" ,a, ">", b)
        
}














