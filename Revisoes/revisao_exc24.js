function inverteArrayComplex(arr) {
return arr.sort((a, b) => a.length - b.length); // ordenar com o sort, subtrair o comprimento da string b a string a. Ordena por ordem crescente
}



console.log(inverteArrayComplex(["Olá", "do", "Bytes", "4", "Future"])) 
console.log(inverteArrayComplex(["Uma", "frase", "aleatória", "!" ]))