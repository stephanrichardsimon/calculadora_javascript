let input = document.getElementById('inputValue')
let numbers = []
let calcFunction = ''


const btnAction = (tecla) => {
    if (tecla !== '+' && tecla !== '-' && tecla !== '*' && tecla !== '/') {
        input.value = input.value + tecla
    }
    if (tecla === '+') {
        calcFunction = '+'
        numbers.push(Number(input.value))
        input.value += " + ";
    }
    if (tecla === '-') {
        calcFunction = '-'
        numbers.push(Number(input.value))
        input.value += " - ";
    }
    if (tecla === '*') {
        calcFunction = '*'
        numbers.push(Number(input.value))
        input.value += " * ";
    }
    if (tecla === '/') {
        calcFunction = '/'
        numbers.push(Number(input.value))
        input.value += " / ";
    }
}

const finalResult = () => {
    if (calcFunction === '+') {
        let valor = input.value.split('+')
        let resultado = 0
        for (let index = 0; index < valor.length; index++) {
            resultado += Number(valor[index])
        }
        input.value = resultado
    } else if (calcFunction === '-') {
        let valor = input.value.split('-')
        let resultado = 0
        for (let index = 0; index < valor.length; index++) {
            resultado = valor[index -1] - valor[index]
        }
        input.value = resultado
    } else if (calcFunction === '*') {
        let valor = input.value.split('*')
        let resultado = 0
        for (let index = 0; index < valor.length; index++) {
            resultado = valor[index -1] * valor[index]
        }
        input.value = resultado
    } else if (calcFunction === '/') {
        let valor = input.value.split('/')
        let resultado = 0
        for (let index = 0; index < valor.length; index++) {
            resultado = valor[index -1] / valor[index]
        }
        input.value = resultado
    }
}

const clearInput = () => {
    input.value = ''
}