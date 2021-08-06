var tabela = document.querySelector("table");
//O event vai apontar o alvo do evento juntamente com o target
tabela.addEventListener("dblclick", function(event){
// A operação abaixo ira fazer o seguinte, a o vai apontar pro meu alvo do evento e depois vai apontar para o pai do alvo 
// é depois vai ser removido
 event.target.parentNode.classList.add("sumir")
 
 setTimeout(function(){
     event.target.parentNode.remove();
        //milesegundos
    }, 500)
});

//pacientes.forEach(function(paciente){
//paciente.addEventListener("dblclick", function(){
    //This esta sempre atrelado a quem esta atrelado ao dono do evento, no caso seria 
  //  this.remove();
//});
//});