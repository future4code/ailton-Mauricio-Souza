// const estudante = {
//     nome: 'Mauricio Moura',
//     cor_favorita: 'azul',
//     esta_estudando: true,
//     linguagens: ['HTML','CSS', 'JS'] ,
//     falar: ()=> {
//         console.log("gratidao!")
//     }
     
// }
// console.log(estudante.cor_favorita)
// estudante.cor_favorita = 'preto';

// estudante.falar()

// const filme = {
//     nome: "soul",
//     ano_lancamento: 2021,
//     lista_elenco: ["usuario1", "usuario2", "usuario3"],
//     voce_assistiu: true
// }
// console.log(filme.nome);
// console.log(filme.ano_lancamento)
// console.log(filme["lista_elenco"])
// console.log(filme["voce_assistiu"]);

// const pessoa = {
//     nome: 'Mauricio',
//     idade: 24,
//     generoMusicalPreferido: 'Funk'
// }
// console.log(`o meu nome é ${pessoa.nome}, tenho ${pessoa.idade}, anos e gosto muito de ${pessoa.generoMusicalPreferido}. `)

// filmes.personagens = ["personagem1", "personagem2", "personagem3"]
// console.log(`${filme.lista_elenco[0]} interpreta ${filme.personagens[0]}`)
// console.log(`${filme.lista_elenco[1]} interpreta ${filme.personagens[1]}`)
// console.log(`${filme.lista_elenco[2]} interpreta ${filme.personagens[2]}`)

// fiilme.lista_elenco[0] = 'personagem1';
// console.log(fiilme)

// const usuario = {
//     nome: 'Mauricio',
//     idade: 24,
//     email: 'teste.1@gmail.com'
// }
// console.log(usuario)

// const novoUsuario = {
//     ...usuario,
//     nome: 'Mike',
// }
// console.log(novoUsuario)

// function transforma(obj) {
//     const novoObj = {
//         ...obj,
//         comidas:['lasanha', 'picanha', 'macarrao'],
//         melhor_amigo: {
//             nome: 'Eduardo',
//             idade: 21
//         }
//     }
// console.log(`o nome da pessoa é ${novoObj.nome}`)
// }

//EXERCICIOS DE INTERPRETAÇÃO

1.

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

// Matheus Nachtergaele  Virginia Cavendish canal; globo, horario 14h


2.

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

//{nome: 'Juca', idade: 3, raca: 'SRD'}
// {nome: 'Juba', idade: 3, raca: 'SRD'}
 //{nome: 'Jubo', idade: 3, raca: 'SRD'}

 // b. a sintaxe dos 3 pontos copia as chaves do objeto


 3.

//  function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//false  unerfined

//



//EXERCICIOS DE ESCRITA

1. 
// const pessoa = {
// nome: 'Mauricio',
// apelidos: ['Miih', 'Moura', 'Mau']
// }

// function mostrarPessoa (objeto){
//     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]}, ${objeto.apelidos[2]}`);

// }


// //1B.
// const novaPessoa = { ...pessoa, apelidos:['messi', 'cr7', 'ney']
// };
// mostrarPessoa (novaPessoa)


//2.
// const pessoa1 = {
//     nome:'Mauricio',
//     idade:24,
//     profissao:'dev'
// }

// const pessoa2 = {
//     nome:'Messi',
//     idade:34,
//     proffissao:'jogador'
// }

// function informacoes (novaPessoa){
//     return [ novaPessoa.nome
//     ]
 
//NÃO CONSEGUI RESOLVER


//3.
const carrinho = []

const mamao = {
    nome:'Mamão',
    disponibilidade:true,
}

const morango = {
    nome:'Morango',
    disponibilidade:true
}

const melancia = {
    nome:'Melancia',
    disponibilidade:true
}

function adicionaFruta(fruta){
    carrinho.push(fruta)
}

adicionaFruta(mamao);
adicionaFruta(morango);
adicionaFruta(melancia);
console.log (carrinho)




