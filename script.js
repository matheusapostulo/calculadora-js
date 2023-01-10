// constante do resultado
const resultado = document.querySelector('.resultado')
const fundo_resultado = document.querySelector('#container-resultado')

// função para checar se a calculadora está ligada ou desligada
function checarOnOff(){
    situacao = window.getComputedStyle(resultado).visibility
    situacao_back = window.getComputedStyle(fundo_resultado).backgroundColor
    console.log(`A calculadora está ${situacao} e a cor do fundo é a ${situacao_back}`)
    return situacao == 'visible' ? true : false
}

// MUDAR A VISIBILITY DO ON/OFF
const botao_on = document.querySelector('#on')
const botao_off = document.querySelector('#off')

// botão on
botao_on.addEventListener('click',() => {
    fundo_resultado.style.backgroundColor = 'rgba(45, 85, 45, 0.596)'
    resultado.classList.remove('desligar')
    resultado.classList.add('ligar')
    console.log('Ligou')
    console.log(checarOnOff())
})

// botão off
botao_off.addEventListener('click', () =>{
    fundo_resultado.style.backgroundColor = 'rgba(7, 15, 7, 0.596)'
    resultado.classList.add('desligar')
    console.log('Desligou')
    console.log(checarOnOff())
})

// Clique dos botões
function cliqueNumero(e){
    e.preventDefault()
    console.log(e.target.value)
    resultado.innerHTML = e.target.value
}

// Obtendo os botões de números
const botoes_numeros = document.querySelectorAll('#container-botoes .botoes-numeros')
console.log(botoes_numeros)

// Criando variáveis para os números de 0 à 9
for (var n = 0; n <= 9; n++){
    window['numero_'+n] = botoes_numeros[n]
}
// Criando a variável do ponto que não é um número
const botao_ponto = document.querySelector('#ponto')

// Capturando os eventos dos botões se a calculadora estiver ligada
if (checarOnOff() == true){
    numero_0.addEventListener('click', cliqueNumero)
    numero_1.addEventListener('click', cliqueNumero)
    numero_2.addEventListener('click', cliqueNumero)
    numero_3.addEventListener('click', cliqueNumero)
    numero_4.addEventListener('click', cliqueNumero)
    numero_5.addEventListener('click', cliqueNumero)
    numero_6.addEventListener('click', cliqueNumero)
    numero_7.addEventListener('click', cliqueNumero)
    numero_8.addEventListener('click', cliqueNumero)
    numero_9.addEventListener('click', cliqueNumero)
    botao_ponto.addEventListener('click', cliqueNumero)
} 




// uma funcao para fazer as operações
//// se tiver uma operação já pode começar a exibir
//// condicionais para evitar operações invalidas 

// uma funcao para apagar tudo

// uma funcao para apagar um número por um




