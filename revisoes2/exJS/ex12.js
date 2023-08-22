//Escreva uma função que gere um número inteiro aleatório entre um valor mínimo e máximo fornecidos como argumentos.

function numeroAleatorio(n1, n2){
    max = Math.max(n1,n2)
    min = Math.min(n1, n2)
    return Math.floor(Math.random() * (max - min) + min)
}




console.log(numeroAleatorio(10, 20))