// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
 const altura = Number(prompt("insira altura"))
 const largura = Number(prompt("insira a largura"))
 console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
 const anoAtual = Number(prompt("insira um nome"))
 const anoNascimento = Number(prompt("seu ano de nascimento"))
 console.log( anoAtual - anoNascimento)
}

// }

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 return peso / (altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
 const nome = prompt("seu nome")
 const idade = prompt("sua idade")
 const email = prompt("seu email")
 console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt(" sua cor favorita ")
  const cor2 = prompt(" segunda cor ")
  const cor3 = prompt(" terceira cor ")
  console.log([cor1, cor2, cor3])
  
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase ()
  
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 return custo / valorIngresso
 
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
  
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
  
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array [array.length -1]
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
const primeiro = retornaPrimeiroElemento (array)
const ultimo = retornaUltimoElemento (array)
 array [0] = ultimo
 array [array.length -1] = primeiro
 return array 
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
return string1.toLowerCase () === string2.toLowerCase ()
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  
  
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}