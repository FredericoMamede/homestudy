// Cria uma função que inverta a ordem dos elementos em um array com número par de elementos do meio do mesmo para as extremidades.

function inverteArrayComplex(array){

let primeiraMetade = []
let segundaMetade = []
let arrayTotal = []
    for(let i = 0; i < array.length/2; i++){
            primeiraMetade.push(array[i])
    }
    for(let i = array.length/2; i < array.length; i++) {
            segundaMetade.push(array[i])
    }
    return arrayTotal.concat(primeiraMetade.reverse(), segundaMetade.reverse())
}





console.log(inverteArrayComplex([3,5,2,6])) //[5,3,6,2]
console.log(inverteArrayComplex([1,2,3,4,5,6,7,8,9,10])) //[5,4,3,2,1,10,9,8,7,6]