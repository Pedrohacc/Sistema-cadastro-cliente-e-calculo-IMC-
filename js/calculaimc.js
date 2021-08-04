var titulo = document.querySelector(".titulo")
// Então utilizando o meu textContent eu consigo puxar valores de tags e alterar eles tbm
titulo.textContent = "Tabela Java Script"

//titulo.addEventListener("click", mostramssgm); função anonima 
titulo.addEventListener("click", function(){
alert("CLicou ai? clicou aqui");
})
//função nomeada
//function mostramssgm(){
  //  alert("CLicou ai? clicou aqui");

//}


var paciente = document.querySelectorAll(".paciente");
for (var i=0; paciente.length; i++){
var peso = paciente[i].querySelector(".info-peso").textContent;
var altura = paciente[i].querySelector(".info-altura").textContent;
// Tem que especificar qual vai ser calculado primeiro
var IMC = calculaIMC(peso, altura);
var imcresult = paciente[i].querySelector(".info-imc");

if (peso <= 0 || peso >=1000){
        imcresult.textContent = "Peso Inválido"
       //classList acessa as classes e o add adiciona a classe desejada
        paciente[i].classList.add("paciente-invalido")
    } else if(altura >= 3.00){
        imcresult.textContent = "Altura inválida"
        paciente[i].classList.add("paciente-invalido")
    } else{
        //toFixed e uma operação para formatar os valores com uma quantida de casa desejada
        imcresult.textContent = IMC;
    }

}



function calculaIMC(peso, altura){
    var IMC = peso /(altura * altura);
    return IMC.toFixed(2)
}
    
    




    


