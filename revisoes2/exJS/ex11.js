//Cria uma função que verifique se uma string fornecida é um palíndromo (uma string que é lida da mesma forma da esquerda para a direita e vice-versa).

function verificaPalindromo(palavra){
    let palavraInvertida = palavra.split('').reverse().join('')
    if(palavra.toLowerCase() == palavraInvertida.toLowerCase()){
     return true
    } else {
    return false
    }
}




console.log(verificaPalindromo("Osso")) //True
console.log(verificaPalindromo("Cão")) //False