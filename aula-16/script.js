console.log("ha quanto tempo html. tudo bem!?");
console.log(document);
// DOM nao e um recurso do Node.js

//document.getElementById();// busca pelo Id
//document.//getElementByName();// busca pelo nome
//getElementByClassName();// busca pelo classe

const titulo = document.getElementById("titulo");
console.log(titulo);

const paragrafos = document.getElementsByTagName("p");
console.log("paragrafos");
const itens = document.getElementsByClassName("itens");
console.log(itens);
const titulo2 = document.querySelector("#titulo");
console.log(titulo2);
const itens2 = document.querySelectorAll(".item");
console.log(itens2);

titulo2.innerHTML = "JavaScript e <em>mel</em>";

constcapa = document.querySelector("capa");

constcapa = document.querySelector("msg");

constcapa = document.querySelector("#capa");

setTimeout(() => {
    
    titulo2.style.color = "tomato";
    titulo2.style.fontFamily = "Arial";
    titulo2.style.backgroundColor = "pink";
    capa.style.border ="5px dashed purple"

    capa.src = "https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}, 3000);

const msg = document.querySelector("#msg");

setTimeout(()=> {
    msg.classList.add("erro"); msg.innerHTML = "Algo deu errado"    
}, 2000);
setTimeout(() =>{
    msg.classList.remove("erro");
    msg.classList.add("ok");
    msg.innerText = "Agora ta tudo OK"
}, 4000);



