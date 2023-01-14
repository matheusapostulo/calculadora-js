// Constantes essenciais da calculadora
const resultado = document.querySelector('.resultado')
const fundo_resultado = document.querySelector('#container-resultado')
const array_numeros = []

// Função para checar se a calculadora está ligada ou desligada
function checarOnOff(){
    situacao = window.getComputedStyle(resultado).visibility
    situacao_back = window.getComputedStyle(fundo_resultado).backgroundColor
    console.log(`A calculadora está ${situacao} e a cor do fundo é a ${situacao_back}`)
    return situacao == 'visible' ? true : false
}

// Função usada para saber se é um botao de numero ou operacao
function checarNumeroOperacao(elemento_dom){
    return elemento_dom.classList.contains("botoes-operacoes") ? "operacao" : "numero"
}

// Função que vai validar os números/operações 
function validarNumeroBotao(numero_botao, classe_elemento){
    console.log(classe_elemento)
    let ultimo_elemento = array_numeros[array_numeros.length-1]
    // Condicionais que pode adicionar ao array/tela
    if((array_numeros.length == 0 && classe_elemento != "botoes-operacoes") || (isNaN(ultimo_elemento) == false && classe_elemento == 'botoes-numeros') || (isNaN(ultimo_elemento) == false && classe_elemento == 'botoes-operacoes') || (isNaN(ultimo_elemento) == true && classe_elemento == 'botoes-numeros')) {
        array_numeros.push(numero_botao)
    }
}

// Clique dos botões
function cliqueBotao(e){
    console.log(`Estado da calculadora = ${checarOnOff()}`)
    if (checarOnOff() == true){
        const classe_elemento = e.target.className
        validarNumeroBotao(e.target.value, classe_elemento)
        let string_numeros = ''
            array_numeros.forEach(e =>{
            string_numeros += e
        })
        if (string_numeros != ''){ // exibir na tela apenas se tiver algo pra exibir(evitar exibir um array/string vazio)
            resultado.textContent = string_numeros // exibe os números digitados na tela
        }        
    }
}

// Função que apaga toda a operação
function apagarTudo(){
    resultado.textContent = 0  // aqui pode vir uma função pra resetar a conta
    array_numeros.length = 0 // apagando os elementos do vetor por estar resetando
}

// Função que faz o cálculo de fato
function resultadoFinal(){
    console.log(`Estado da calculadora = ${checarOnOff()}`)
    if (checarOnOff() == true){
        console.log('CALCULANDO...')
        let string_resultado = ''
            array_numeros.forEach(e =>{
            string_resultado += e
        })
        // Iremos usar o eval para fazer as operações direto nessa string (possível brecha)
        resultado_final = eval(string_resultado)
        console.log(resultado_final)

        // Por fim, mostraremos o resultado na tela
        resultado.textContent = resultado_final

        // Zerando o vetor para as próximas operações
        array_numeros.length = 0
    }
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
porcentagem.addEventListener('click', cliqueBotao)
raiz.addEventListener('click', cliqueBotao)
divisao.addEventListener('click', cliqueBotao) // Se clicar no botão do resultado iremos concluir a operação
c_apaga.addEventListener('click', apagarTudo) // Se clicar no "C" apaga tudo

result.addEventListener('click', resultadoFinal) 

// O QUE FALTA?
//// VAI FALTAR TRATAR AS OPERAÇÕES DE PORCENTAGEM E RAIZ
//// CONTROLAR O ESTILO DE QUANDO PASSAR DA TELA DO PAINEL
//// COLOCAR UM FUNDO 
