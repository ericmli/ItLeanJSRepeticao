var arrayAlunos = [
    'Luciano',
    'Gabriel',
    'Luiz',
    'Roosvelt',
    'Bruno',
    'Rodrigo',
    'Millena',
    'Alex'
]

// var contador = 0

// while( contador < arrayAlunos.length){
//     console.log(arrayAlunos[contador])
//     contador++


// }


// var rodatnoc = arrayAlunos.length - 1
// while(rodatnoc >= 0){
//     console.log( arrayAlunos[rodatnoc])
//     rodatnoc--
// }


// for(var i = 0; i < arrayAlunos.length; i++){
//     console.log(arrayAlunos[i])
// }

// for(let tnoc = arrayAlunos.length -1 ; tnoc >= 0; tnoc--){
//     console.log(arrayAlunos[tnoc])
// }


// var arrPessoas = [
//     {
//         nome:'Gabriel',
//         idade: 19
//     },
//     {
//         nome:'Roosevelt',
//         idade:28
//     },
//     {
//         nome:'Luiz',
//         idade:24
//     }
// ]


// var txtNomes = ''

// for (let i = 0; i < arrPessoas.length; i++) {
//     txtNomes = txtNomes + 'Nome: ' + arrPessoas[i].nome

// }

// var produtos = [
//     {
//         nomeP: "Celular",
//         precoP: 3800.99,
//         stock: true
//     },
//     {
//         nomeP: "TV",
//         precoP: 4999.99,
//         stock: false
//     },
//     {
//         nomeP: "Fones",
//         precoP: 499.99,
//         stock: true
//     },
//     {
//         nomeP: "Geladeira",
//         precoP: 6999.99,
//         stock: false
//     }
// ]

// var txt = ''


// function stockProduto(aleatorio){
//     if(aleatorio){
//         return 'Disponivel'
//     }else{
//         return 'Indisponível'
//     }
// }

// for (let i = 0; i < produtos.length; i++) {


//     txt += 'Produto ' + produtos[i].nomeP + ' ; Preço ' + produtos[i].precoP + ' ; Estoque ' +  stockProduto(produtos[i].stock) + '\n'

// }

// alert(txt)


var nomeIdade = [

]



function add() {
    let addNome = prompt("Digite seu nome: ")

    let addIdade = Number(prompt("Digite sua idade: "))



    nomeIdade.push({
        nome: addNome,
        idade: addIdade
    })
}


function show() {
    var txt = ''

    for (let i = 0; i < nomeIdade.length; i++) {


        txt += 'Nome: ' + nomeIdade[i].nome + ' ; Idade ' + nomeIdade[i].idade + '\n'

    }
    alert(txt)
}