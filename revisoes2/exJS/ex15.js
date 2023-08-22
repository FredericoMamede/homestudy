//Cria uma função chamada classificaNumero que recebe um número como argumento e retorna "Positivo", "Negativo" ou "Zero" com base no número fornecido.

function classificaNumero(n) {
    if(n > 0){
        return 'positivo'
    } else if ( n < 0){
        return 'negativo'
    } else {
        return 'zero'
    }
}



console.log(classificaNumero(10)) //Positivo
console.log(classificaNumero(-4)) //Negativo
console.log(classificaNumero(0)) //Zero