var botaoadc = document.querySelector("#adicionar-paciente");
botaoadc.addEventListener("click", function(event){
    // metodo que vai previnir o evento padrão evai fazer oque eu fizer abaixo;
  
    event.preventDefault();
    var form  = document.querySelector(".formulario"); 
    var paciente = resultpacienteform(form);
    var erros = validapaciente(paciente);
      if(erros.length > 0 ){
            exibeerro(erros);
            return;
        }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(montaTr(paciente));

    form.reset();
    var limpaerros = document.querySelector(".mensagens-erros");
        limpaerros.innerHTML = "";

})

function resultpacienteform(form){
    // declarando objeto e adicionando valores, essa e a Sintaxe
    var paciente ={
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value, 
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}


function montaTr(paciente){
 
    var pacientetr =  document.createElement("tr");   
    pacientetr.classList.add("paciente");
    


    //colocando como filho 
    pacientetr.appendChild(montatd(paciente.nome, "info-nome"));
    pacientetr.appendChild(montatd(paciente.peso, "info-peso"));
    pacientetr.appendChild(montatd(paciente.altura, "info-altura") );
    pacientetr.appendChild(montatd(paciente.gordura, "info-gordura"));
    pacientetr.appendChild(montatd(paciente.imc, "info-imc"));

    return pacientetr;
}

function exibeerro(erros){
   var ul = document.querySelector(".mensagens-erros");
  //para limpar as mensagens ao entrar no evento do fomulario
   ul.innerHTML = "";
   // usando forEach para andar pelo meu array de erro
   // O erro como parametro seria somente um apelido para acessar o meu erro no array 
   erros.forEach(function (erro) {
       var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        li.classList.add("erro");
        li.classList.add("paciente-invalido");
       
   })
}

function validapaciente(paciente){
    var erro = [];
 if(paciente.nome.length == 0 ){
        erro.push("Nome e inválido");
    }
if(validapeso(paciente.peso) == false){
    erro.push("Peso e inválido");
}
if(validaaltura(paciente.altura)==false){
    erro.push("Altura inválida");
}
if(paciente.gordura.length == 0){
    erro.push("Gordura inválida");
}


return erro;

}

function montatd(dado, classse){
 var td = document.createElement("td");
 td.textContent = dado;
 td.classList.add(classse);
 return td;
}


