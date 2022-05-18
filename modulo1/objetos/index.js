// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//console.log /Matheus Nachtergaele
//console.log/Virginia Cavendish
//console.log/globo 14h

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//console.log / juca, 3, SRD
//console.log/ juba, 3, SRD
//console.log/ jubo, 3, SRD

// A sintaxe dos três pontos replica os dados anteriores

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//console.log/ false (backender é false)
//console.log/.undefined ( não temos a variavel altura)


// const pessoa = {
//     nome: "Mauricio",
//     apelidos: ["Miih", "Maumau", "Moura"]
// }
//  console.log(`eu sou ${pessoa.nome}, mas pode me chamar de ${novaApelido.apelidos}`)

// novaApelido = ["cr7", "messi", "neymar"]

// console.log(`eu sou ${pessoa.nome}, mas pode me chamar de ${novaApelido.apelidos}`)
  
// const usuario = {
// nome = "mauricio"
// Idade = 24
// profissao = "futuro programador" 
// }
// function

// const pergunta1 = "sua roupa é azul ?"
// const pergunta2 = "gosta de laranja ?"
// const pergunta3 = "voce é estudante ?"

// const resposta1 = prompt(pergunta1);
// const resposta2 = prompt(pergunta2);
// const resposta3 = prompt(pergunta3);

// 

// const numero = prompt("insira um numero par");
// console.log("resto da divisão por 2", Number(numero)%2);

// const idade = Number(prompt("digite sua idade"))
// console.log("idade em meses", idade*12)
// console.log("idade em dias", idade*365)
// console.log("idade em horas", idade*365*24)

// const num1 = Number(prompt("digite seu numero"))
// const num2 = Number(prompt("digite outro numero"))

// console.log("o primeiro numero é maior que o segundo", num1 > num2);
// console.log("o primeiro numero é igual ao segundo?", num1 === num2);
// console.log("o primeiro numero é divisivel pelo segundo?", num1 % num2 === 0);
// console.log("o segundo numero é divisivel pelo primeiro?", num2 % num1 === 0);

// let num1 = Number(prompt("insira um numero qualquer"))
// let num2 = Number(prompt("segundo numero"))

// const compararNumeros = (num1, num2) => {
//     if(num1 === num2) {
//         console.log("os numeros são iguais")
//     } else {
//         console.log("os numeros são diferentes")
//     }
// }
// compararNumeros(num1, num2)

    // const listaDeTarefas = []
    // const primeiraTarefa = prompt("digite uma tarefa")
    // const segundaTarefa = prompt("digite uma tarefa")
    // const terceiraTarefa = prompt("digite uma tarefa")
    // listaDeTarefas.push(primeiraTarefa)
    // listaDeTarefas.push(segundaTarefa)
    // listaDeTarefas.push(terceiraTarefa)
    // console.log(listaDeTarefas)
    // const tarefaRealizada = prompt("digite o indice da tarefa realizada:0, 1 ou 2")
    // listaDeTarefas.splice(Number(tarefaRealizada), 1)
    // console.log(listaDeTarefas)
    
    // const minhaFrase = "Eu amo javascript!"
    // const minhaFraseArray = minhaFrase.split("")
    // console.log(minhaFraseArray)
  //  
  
  // function minhaFuncao(variavel){
  //   return variavel*5
  // }
  // console.log(minhaFuncao(2))
  // console.log(minhaFuncao(10))
   
// 
// function formaFrase(nome, idade, cidade, profissao){
//   return `eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
// }
// const frase = formaFrase('Mauricio', 24, 'Santo André','dev')

// console.log(frase)
// console.log(formaFrase('Mauricio', 24, 'Santo André', 'Dev'))

let numeroUsuario = +prompt("digite um numero:")

while (numeroUsuario !== 0){
 numeroUsuario = +prompt("digite um numero:")
}
