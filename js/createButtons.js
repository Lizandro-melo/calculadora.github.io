//Esse arquivo é responsavel por colocar os botoes na calculadora.


//Criei uma array para alimentar os botões com os caracteres
const caracteres = [
    "AC", "←", "/", 
    7, 8, 9, "X", 4, 
    5, 6, "-", 1, 
    2, 3, "+", 0,
    ".", "="
]

//Laço responsável por colocar cada botão na calculadora, alimentando os botões com o array que criei com os caracteres
for(let i = 0; i < caracteres.length; i++){
    buttons = criarBotao($(".teclas"));
    buttons.textContent = caracteres[i];
}

//Essa função foi criar com o destino de otimizar o loop e criar o elemento button e por no html
function criarBotao(index){
    let criarBotao = document.createElement("button");
    index.append(criarBotao);
    $("button").addClass("buttons");
    return criarBotao;
}