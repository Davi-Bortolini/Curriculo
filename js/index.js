//variáveis
var nome = "Davi Bortolini";
var cargo = "Futuro desenvolvedor";

//pega o texto Nome e Cargo
var nomeHtml = document.getElementById("Nome-no-html");
var cargoHtml = document.getElementById("Cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");
var texto3 = document.getElementById("texto-3")

// coloca cargo no inner e chama a função
function colocarCargoNoHtml(cargo){
cargoHtml.innerHTML = cargo;
}

function logarCargo(){
    console.log(cargo);
}
colocarCargoNoHtml(cargo);

//coloca nome e chama a função
function colocarNomeNoHtml(nome){
nomeHtml.innerHTML = nome;
}

function logarNome(){
    console.log(nome);
}
colocarNomeNoHtml(nome);

// botões mostra projetos e oculta sobre
function clickNoProjetos(){
    console.log("Clicou no botão projetos"); // teste do click
    texto1.style.display = "none";
    texto2.style.display = "block";
    texto3.style.display = "none";   
}
//botão função inversa
function clickNoSobre(){
    console.log("Clicou no botão sobre"); // teste do click
    texto1.style.display = "block";
    texto2.style.display = "none";
    texto3.style.display = "none";
}

function clickNoExperiencia(){
	console.log("Clicou no botão experiencia"); // teste do click
    texto1.style.display = "none";
    texto2.style.display = "none";
    texto3.style.display = "block";
}
