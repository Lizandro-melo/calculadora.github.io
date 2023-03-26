//Arquivo responsável por dar função a cada botão da calculadora


//Constante que guarda os botões
const botoesClass = document.querySelectorAll(".buttons")



//Laço que mostra cada carácter clicado no display de cima
for(let i = 0; i < botoesClass.length; i++){
    botoesClass[i].addEventListener("click", function(){
        verificarBotao(botoesClass[i], displayCalcular,displayResultado)
    })
}

//Função capaz de verificar os botões e deixar funcional alguns botões
function verificarBotao(botao, displayEntrada, displaySaida ){

    if (botao.textContent == "C"){
        let menosValor = displayEntrada.value.substring(0, displayEntrada.value.length -1);
        displayEntrada.value = menosValor;
        displaySaida.value = menosValor;
    } else if(botao.textContent == "X"){
        displayEntrada.value += "*";
    } else if(botao.textContent == "AC"){
        displayEntrada.value = "";
        displaySaida.value = "";
    } else if(botao.textContent == "="){
        displayEntrada.value = displaySaida.value
    } else if(botao.textContent == "( )"){
        if(displayEntrada.value.endsWith("(") || /\d$/.test(displayCalcular.value)){
            displayEntrada.value += ')'
        }else{
            displayEntrada.value += "("
            displayEntrada.value = displayEntrada.value
        }
    }else if(botao.textContent == "="){
        displayEntrada.value = displaySaida.value;
        displaySaida.value = ""
    }else{
        displayEntrada.value += botao.textContent
    }
}   