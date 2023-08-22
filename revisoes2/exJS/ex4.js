//Cria uma função chamada verificarIdade que recebe a idade de uma pessoa como argumento. Se a idade for maior ou igual a 18, retorna "Maior de idade", caso contrário, retorna "Menor de idade".

let verificarIdade = idade => {
    if(idade >= 18){
        return'Maior de idade'
    } else {
        return 'Menor de idade'
    }
}



console.log(verificarIdade(18)) //Maior de idade
console.log(verificarIdade(17)) //Menor de idade