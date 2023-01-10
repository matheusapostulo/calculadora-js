// constante do resultado
const resultado = document.querySelector('.resultado')

// função para checar se a calculadora está ligada ou desligada
function checarOnOff(){
    situacao = window.getComputedStyle(resultado).visibility
    console.log('A calculadora está', situacao)
    situacao == 'visible' ? true : false
}

// MUDAR A VISIBILITY DO ON/OFF
checarOnOff()

const botao_on = document.querySelector('#on')
const botao_off = document.querySelector('#off')

// botão on
botao_on.addEventListener('click',() => {
    resultado.classList.remove('desligar')
    resultado.classList.add('ligar')
    console.log('Ligou')
    checarOnOff()
})

// botão off
botao_off.addEventListener('click', () =>{
    resultado.classList.add('desligar')
    console.log('Desligou')
    checarOnOff()
})

// Temos que checar 



// Clique dos botões
function cliqueNumero(e){
    e.preventDefault()

    console.log(e.target.id)
}

const numero_1 = document.querySelector('#um')

numero_1.onclick = cliqueNumero


// uma funcao para fazer as operações
//// se tiver uma operação já pode começar a exibir
//// condicionais para evitar operações invalidas 

// uma funcao para apagar tudo

// uma funcao para apagar um número por um




