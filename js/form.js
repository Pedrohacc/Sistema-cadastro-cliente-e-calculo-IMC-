var botaoadc = document.querySelector("#adicionar-paciente");
botaoadc.addEventListener("click", function(event){
    // metodo que vai previnir o evento padrão evai fazer oque eu fizer abaixo;
    event.preventDefault();
    var form  = document.querySelector(".formulario"); 
    var paciente = resultpacienteform(form);


    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(montaTr(paciente));

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
    var pesotd =  document.createElement("td");
    var nometd =  document.createElement("td");
    var alturatd =  document.createElement("td");
    var gorduratd =  document.createElement("td");
    var imctd =  document.createElement("td");

    nometd.textContent = paciente.nome;
    pesotd.textContent = paciente.peso; 
    alturatd.textContent = paciente.altura;
    gorduratd.textContent = paciente.gordura;
    imctd.textContent = paciente.imc;

    //colocando como filho 
    pacientetr.appendChild(nometd);
    pacientetr.appendChild(pesotd);
    pacientetr.appendChild(alturatd);
    pacientetr.appendChild(gorduratd);
    pacientetr.appendChild(imctd);

    return pacientetr;


    
}