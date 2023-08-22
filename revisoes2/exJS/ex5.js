//Dado um array de números, cria uma função chamada calculaSoma que retorna a soma de todos os elementos do array.


let calculaSoma = array => {
    let soma = 0
    for(let i = 0; i < array.length; i++){
        soma += array[i]
    }
    return soma 
}



console.log(calculaSoma([1,2,3])) //6
console.log(calculaSoma([2,3,5,8,1,2,3])) //22