// Escreva uma função que compare duas palavras e determine se são iguais, independentemente de estarem em maiúsculas ou minúsculas.

let comparaPalavras = (palavras1, palavras2) => {
    if (palavras1.toLowerCase().includes(palavras2.toLowerCase())) {
        return 'As palavras sao identicas'
    } else {
        return 'As palavras sao diferentes'
    }
    
} 


console.log(comparaPalavras("ByTEs", "bytes")) //As palavras são idênticas.
console.log(comparaPalavras("Olá", "Adeus")) //As palavras são diferentes.