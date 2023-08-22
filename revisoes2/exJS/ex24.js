// Escreva uma função que ordene um array de strings em ordem crescente de acordo com o comprimento das strings.


function inverteArrayComplex(array){
    let newArray = []
    let palavraMaior = ''
        for (let i in array){
            if(palavraMaior.length < array[i].length){
                palavraMaior = array[i]
            }
        }

    for(let i = 0; i <= palavraMaior.length; i++){
        for(let y = 0; y < array.length; y++){
            if(i == array[y].length){
                newArray.push(array[y])
            }
        }
    }
    return newArray
}




console.log(inverteArrayComplex(["Olá", "do", "Bytes", "4", "Future"])) //["4", "do", "Olá", "Bytes", "Future"]
console.log(inverteArrayComplex(["Uma", "frase", "aleatória", "!" ])) //["!", "Uma", "frase", "aleatória"]


let array = ["Olá", "do", "Bytes", "4", "Future"]

console.log(String(...array))
