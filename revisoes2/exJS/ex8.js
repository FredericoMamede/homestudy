//Escreva uma função que recebe uma frase como argumento e retorna o número de palavras existentes nessa frase.

let contadorDePalavras = palavras =>{ 
    let array = palavras.split(' ')
    return array.length 
}


console.log(contadorDePalavras("Este é um exemplo")) //4
console.log(contadorDePalavras("Olá")) //1