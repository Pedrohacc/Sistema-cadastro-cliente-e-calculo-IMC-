var titulo = document.querySelector(".titulo")
// Então utilizando o meu textContent eu consigo puxar valores de tags e alterar eles tbm
titulo.textContent = "Tabela Java Script"



var paciente = document.querySelectorAll(".paciente")

for (var i=0; paciente.length; i++){
var peso = paciente[i].querySelector(".info-peso").textContent
var altura = paciente[i].querySelector(".info-altura").textContent
// Tem que especificar qual vai ser calculado primeiro
var IMC = peso /(altura * altura);
var imcresult = paciente[i].querySelector(".info-imc");

if (peso <= 0 || peso >=1000){

        imcresult.textContent = "Peso Inválido"
    } else if(altura >= 3.00){
        imcresult.textContent = "Altura inválida"
    } else{
        imcresult.textContent = IMC.toFixed(2);
    }

}






    

