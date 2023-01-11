/* var nome = prompt("Qual o seu nome?");

var sobrenome = prompt("Qual o seu sobrenome?");

console.log("Olá", " " + nome + " " + sobrenome);

document.Write(" Bem vindo " + nome);

document.Write("<img src='https://sujeitoprogramador.com/steve.png' />");
 */

var area = document.getElementById("area");

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