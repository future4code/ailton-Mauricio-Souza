// let numeroUsuario = +prompt('digite um numero:')
// const numerosDigitados = []
// numerosDigitados.push(numeroUsuario)

// while (numeroUsuario !== 0){
//     numeroUsuario = +prompt('digite um numero:')

//     numerosDigitados.push(numeroUsuario)
// }
// console.log(numerosDigitados)

// let contador = 0
// let soma = 0

// while (contador < numerosDigitados.length){
//     soma = soma + numerosDigitados [contador]

//     contador++
// }
// console.log(soma)

// const maior = (arr) => {
//     let maior = 0
//     for(let i = 0; i < arr.length; i++) {
//    const elemento = arr[i]
//    if (elemento > maior) {

//    }
//  }
// console.log(maior)
// }
// maior([1,2,3])

// let numeros = [1,2,3,4,5]

// for(let numero of numeros) {
//     console.log(numero)
// }

// const juntaPalavras = (arr) => {
//     let frase = ""

//     for(let palavra of arr) {
// frase = frase + " "
// frase = frase + palavra
//     }
//     console.log(frase)
// }

// juntaPalavras(["oi", "tudo na paz?"])



//interpretação 1

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//resultado 10// 


// 4

//[19, 21, 23, 25, 27, 30]

//

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// **** e erro


//exercicios 1 interpretaçao

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//10


// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}

// }

//todos os numeros maiores de 18 (19,21,23,25,27,30)



// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++


// **** e um erro


//exercicios de escrita

1

// const bichosEstimacao = +prompt('quantos bichinhos voce tem ?');
// console.log(bichosEstimacao)
// if (bichosEstimacao === 0){
//     console.log('triste! adote logo seu pet ...')
// }

// if(bichosEstimacao > 0){
//    let bichos = []
//    for(let i = 0; i < bichosEstimacao; i++)

// bichos.push(prompt('qual nome do seu pet?'))

// }
// console.log(bichos)




2

const arrayOriginal = [5, 22, 98, 121, 10]

function valorDoArrayOriginal (arrayOriginal) {
    for(valor of arrayOriginal){
        console.log(valor)
    }
}
valorDoArrayOriginal (arrayOriginal)

function valorDoArrayOriginal (arrayOriginal){
    for(valor of arrayOriginal){
        console.log (valor/10)
    }
}

function valoresPares (arrayOriginal) {
    arrayNumerosPares = []
        for (valor of arrayOriginal){
            if(valor % 2 === 0){
                arrayNumerosPares.push(valor)
            }
        }
    console.log(arrayNumerosPares)
    }
valoresPares(arrayOriginal)


function arrayDeString (arrayOriginal)
let arrayDeString2 = []
let i = 0
for(valor of arrayOriginal){
    arrayDeString2.push (`o elemento do index ${i} é: ${valor}`)
    i++
}
console.log(arrayDeString2)

function maiorOuMenorNumero (arrayOriginal){
    let maiorNumero = 0;
    menorNumero = Infinity;
    for(let i = 0; i , , arrayOriginal.length; i++){

        if(arrayOriginal[i] < menorNumero){
            menorNumero = arrayOriginal[i]
        }
    }else (arrayOriginal[i] > maiorNumero){
            maiorNumero = arrayOriginal[i]
        }
    }
    console.log('O maior numero é:', maiorNumero)
    console.log("o menor numero é:", menorNumero)




