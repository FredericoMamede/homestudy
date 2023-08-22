function contadorDePalavras(str) {
str = str.trim(); // remove os espacos em branco

let palavras = str.split(' '); // divide a str em palavras usando espacos como separadores

return palavras.length;
}

console.log(contadorDePalavras("Este e um exemplo"));
console.log(contadorDePalavras("Ola"));