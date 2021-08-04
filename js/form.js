var botaoadc = document.querySelector("#adicionar-paciente");
botaoadc.addEventListener("click", function(event){
    // metodo que vai previnir o evento padrão evai fazer oque eu fizer abaixo;
    event.preventDefault();
    var form  = document.querySelector(".formulario"); 
    var paciente = resultpacienteform(form);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(montaTr(paciente));

    form.reset();

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

function montatd(dado, classse){
 var td = document.createElement("td");
 td.textContent = dado;
 td.classList.add(classse);
 return td;
}