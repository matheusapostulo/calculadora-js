// Constantes essenciais da calculadora
const resultado = document.querySelector('.resultado')
const fundo_resultado = document.querySelector('#container-resultado')
const array_numeros = []

// função para checar se a calculadora está ligada ou desligada
function checarOnOff(){
    situacao = window.getComputedStyle(resultado).visibility
    situacao_back = window.getComputedStyle(fundo_resultado).backgroundColor
    console.log(`A calculadora está ${situacao} e a cor do fundo é a ${situacao_back}`)
    return situacao == 'visible' ? true : false
}

// Função que vai validar os números/operações 
function validarNumeroBotao(numero_botao){
    if(array_numeros[array_numeros.length-1] != numero_botao){
        array_numeros.push(numero_botao)
    }
}

function resultadoFinal(){
    console.log(`Estado da calculadora = ${checarOnOff()}`)
    if (checarOnOff() == true){

    }
}

// Clique dos botões
function cliqueBotao(e){
    console.log(`Estado da calculadora = ${checarOnOff()}`)
    if (checarOnOff() == true){
        validarNumeroBotao(e.target.value)
        let string_numeros = ''
            array_numeros.forEach(e =>{
            string_numeros += e
        })
        resultado.textContent = string_numeros // exibe os números digitados na tela 
    }
}

const apagarTudo = function(){
    resultado.textContent = 0  // aqui pode vir uma função pra resetar a conta
    array_numeros.length = 0 // apagando os elementos do vetor por estar resetando
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
    apagarTudo() // apagando tudo pois vai desligar
    console.log('Desligou')
    console.log(checarOnOff())
})

// Obtendo os botões de números
const botoes_numeros = document.querySelectorAll('#container-botoes .botoes-numeros')
// console.log(botoes_numeros)

// Criando variáveis para os números de 0 à 9
for (var n = 0; n <= 9; n++){
    window['numero_'+n] = botoes_numeros[n]
}

// Criando a variável do ponto que não é um número
const botao_ponto = document.querySelector('#ponto')

// Criando as variáveis dos botões das operações
const soma = document.querySelector('#soma')
const subtracao = document.querySelector('#subtracao')
const multiplicacao = document.querySelector('#multiplicacao')
const divisao = document.querySelector('#divisao')
const result = document.querySelector('#result')
const porcentagem = document.querySelector('#porcentagem')
const raiz = document.querySelector('#raiz')

// Criando a variável do botão que apaga
const c_apaga = document.querySelector('#C')

// Capturando os eventos dos botões se a calculadora estiver ligada
numero_0.addEventListener('click', cliqueBotao)
numero_1.addEventListener('click', cliqueBotao)
numero_2.addEventListener('click', cliqueBotao)
numero_3.addEventListener('click', cliqueBotao)
numero_4.addEventListener('click', cliqueBotao)
numero_5.addEventListener('click', cliqueBotao)
numero_6.addEventListener('click', cliqueBotao)
numero_7.addEventListener('click', cliqueBotao)
numero_8.addEventListener('click', cliqueBotao)
numero_9.addEventListener('click', cliqueBotao)
botao_ponto.addEventListener('click', cliqueBotao)
soma.addEventListener('click', cliqueBotao)
subtracao.addEventListener('click', cliqueBotao)
multiplicacao.addEventListener('click', cliqueBotao)
porcentagem.addEventListener('click', resultadoFinal)
raiz.addEventListener('click', cliqueBotao)
divisao.addEventListener('click', cliqueBotao) // Se clicar no botão do resultado iremos concluir a operação
c_apaga.addEventListener('click', apagarTudo) // Se clicar no "C" apaga tudo






