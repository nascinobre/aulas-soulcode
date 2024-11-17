//programacao assicrona -> funcoes paralelas
console.log("antes");
setTimeout(() => {
    console.log("atrasado");
}, 2000
);

console.log("depois");

let a = 2;
a++;
setTimeout(() => ++a, 1000);

console.log(a); //3

// async e await
// Promise - Promessa (instrucoes executadas de forma assicrona)

axios.get("https://api.github.com/users/nascinobre"). then(resposta => {
    console.log(resposta);
});

async function buscarDadosGithub() {
    const resposta = await axios.get("https://api.github.com/users/nascinobre");    
    console.log(resposta);    
}

buscarDadosGithub();

    console.log("depois da reuniao");




