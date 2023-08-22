// Escreva uma função que conte quantos números pares e quantos números ímpares existem em um array de números.


function contadorParesImpares(array){
    let pares = 0
    let impares = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            impares++
        } else {
            pares++
        }
    }
    return `Pares: ${pares} e Impares: ${impares}`
}


console.log(contadorParesImpares([2,5,4,3,2,2,7])) //Pares: 4 e Ímpares: 3
console.log(contadorParesImpares([4,2,3,5,4,6,7,8,10,2,4])) //Pares: 8 e Ímpares: 3