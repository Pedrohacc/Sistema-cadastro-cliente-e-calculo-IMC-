var btnbuscarpaci = document.querySelector("#buscar-paciente");

btnbuscarpaci.addEventListener("click", function(){
    // o XMLHttpRequest  ele faz requisções via http 
    var xhttp = new XMLHttpRequest();
    // ELE ABRE MINHA CONEXÃO VIA HTTP ONDE PRIMEIRO EU DECLARO O METODO  DE REQUISIÇÃO E MOSTRO AONDE 
    xhttp.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    // crio um evento para escutar minha requisição   lOAD E CARREGADa
    xhttp.addEventListener("load",function(){
        var resposta = xhttp.responseText;
        // ele pega  os dados que estão no formato JSON e transforma em objeto java script 
       var pacientes = JSON.parse(resposta);

       pacientes.forEach(function(paciente) {
        adicionapaciente(paciente);
    });

    })

    //xhttp.status  posso puxar informação

    // PEGA A REQUISIÇÃO E ENVIA ELA
    xhttp.send()
});
