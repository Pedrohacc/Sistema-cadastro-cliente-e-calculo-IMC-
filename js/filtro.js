var filtro =  document.querySelector("#filtrar");

filtro.addEventListener("input",function(){
   
    var pacientes = document.querySelectorAll(".paciente");

    if(filtro.value.length >0){

     for(var i=0; i < pacientes.length; i++){
       var nome = pacientes[i].querySelector(".info-nome");
       var nomeresult = nome.textContent;
       // trabalhando com expressão regular
       // assim a partir das iniciais jA ENCONTRA O MEu NOME     //O I E PARA MOSTRAR QUE N E CASESENSITIVE
       var expressao = new RegExp(filtro.value, "i");

        if (!expressao.test(nomeresult)){
            pacientes[i].classList.add("display");

        }
        else{
            pacientes[i].classList.remove("display");
        }

    }
}else{

    for(var i=0 ; i < pacientes.length; i++){
        pacientes[i].classList.remove("display");
    }
}
});