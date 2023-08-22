//Declara um array com os números de 1 a 5. Usando um loop, percorre o array e exibe cada número.



function mostrarValoresArray(array){
    let numeros = 0
    for(let i in array){
        console.log(numeros = array[i])
    }
}

console.log(mostrarValoresArray([1, 2, 3, 4, 5]))