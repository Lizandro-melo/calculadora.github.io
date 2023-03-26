//Arquivo responsável por ativar o display da calculadora


//Laço que ao identificar um click em qualquer um dos botões fara com que o resultado da operação matemática do display de cima apareça no display de baixo
for(let i = 0; i < botoesClass.length; i++){
    botoesClass[i].addEventListener("click", function(){
        recarregarInput(displayCalcular, displayResultado)
    })
}


//Função capaz de pegar a string do display de cima e transformar em algo calculável e jogar para o display de baixo
function recarregarInput(displayEntrada, displaySaida){
    let resultado = eval(displayEntrada.value)
    if(displaySaida.value == displayEntrada.value){
        displaySaida.value = ""
    }else{
        displaySaida.value = resultado
    }
}