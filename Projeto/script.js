/* var nome = prompt("Qual o seu nome?");

var sobrenome = prompt("Qual o seu sobrenome?");

console.log("Olá", " " + nome + " " + sobrenome);

document.Write(" Bem vindo " + nome);

document.Write("<img src='https://sujeitoprogramador.com/steve.png' />");
 */

/* var area = document.getElementById("area");

function entrar() {
  var nome = prompt("Digite seu nome");

  if (nome === "" || nome === null) {
    alert("Ops algo deu errado");
    area.innerHTML = "Clique no botão para acessar ....";
  } else {
    area.innerHTML = "Bem vindo " + nome + "";

    let botaoSair = document.createElement("button")
    botaoSair.innerText = "Sair da conta"
    botaoSair.onclick = sair

    area.appendChild(botaoSair)
  }
}

function sair(){
  alert('Até mais!')
  area.innerHTML= "Você saiu!"
}

function mediaAluno(nota1, nota2){
  var media = (nota1 + nota2) /2;

  if(media >=7 ){
    console.log("Aluno Aprovado com a media" + media)
  }else if(media < 7){
    console.log("Aluno Reprovado com a media" + media)
  }
}

function aluno(nome, curso){
  var mensagem = "Seja bem vindo" + nome + "Ao curso de" + curso;

  console.log(mensagem)
}
 */

//While = Enquanto

/* var x = 0;

while(x < 10){
  document.write("<br>O valor do X é :" + x)

  //Aumentando o Valor do x
  x++;
} */

// For = Para

/* for (a = 0; a < 5; a++){
  document.write("<br> Valor de A :" + a)
} */

// SWITCH

/* function pedir() {
  var valor = prompt("Digite um valor de 1 a 4");

  switch (Number(valor)) {
    case 1:
      alert("Você escolheu 1 = Suco");
      break;

    case 2:
      alert("Você escolheu 1 = Agua");
      break;

    case 3:
      alert("Você escolheu 1 = Sorvete");
      break;

    case 4:
      alert("Você chamou o garçom!");
      break;

    default:
      alert("Digite de 1 a 4!");
  }
} */

/* var data = new Date();

data.getHours();
data.getMinutes();
data.getSeconds();
data.getMilliseconds();

var dataNova = new Date("Janeiro 18,2023")

Date.parse(dataNova)
//Tras os milisegundos

dataNova.getDate()+"/"(dataNova.getMonth()+1)+"/"+dataNova.getFullYear()

var dias = ["D0M","SEG","TER","QUA", "QUI", "SEX"]

dias[dataNova.getDay()]; */

var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
  event.preventDefault();

  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  imc = peso / (altura * altura);

  if (imc < 17) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "<br/> Seu resultado foi:" +
      imc +
      "<br/>Cuidado você está abaixo do peso!";
  } else if (imc > 17 && imc <= 18.49) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "<br/> Seu resultado foi:" + imc.toFixed(2) + "<br/>Abaixo do peso!";
  } else if (imc > 18.5 && imc <= 24.99) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "<br/> Seu resultado foi:" + imc.toFixed(2) + "<br/>Você esta abaixo do peso!";
  } else if (imc > 25 && imc <= 29.99) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "<br/> Seu resultado foi:" + imc.toFixed(2) + "<br/>Você esta no peso certo!";
  }else if (imc >= 30){
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "<br/> Seu resultado foi:" + imc.toFixed(2) + "<br/>Cuidado obesidade!";
  }

  document.getElementById('peso').value = '';
  document.getElementById('altura').value = '';
}
