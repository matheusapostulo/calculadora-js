// MUDAR A VISIBILITY DO ON/OFF
const resultado = document.querySelector('.resultado')
const botao_on = document.querySelector('#on')
const botao_off = document.querySelector('#off')

// botão on
botao_on.addEventListener('click',() => {
    resultado.classList.add('ligar')
    console.log('Ligou')
})

// botão off
botao_off.addEventListener('click', () =>{
    resultado.classList.add('desligar')
    console.log('Desligou')
})




// pegar todos os elementos  -> numero.onclick = chamaFuncao
// Testando com o número 1
const array_numeros = []

function cliqueNumero(e){
    e.preventDefault()
    array_numeros.push(1)
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = array_numeros

}

const numero_1 = document.querySelector('#um')

numero_1.onclick = cliqueNumero


// uma funcao para fazer as operações
//// se tiver uma operação já pode começar a exibir
//// condicionais para evitar operações invalidas 

// uma funcao para apagar tudo

// uma funcao para apagar um número por um




