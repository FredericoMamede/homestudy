//Cria uma função que receba dois números e uma operação (adição, subtração, multiplicação ou divisão) como argumentos e retorna o resultado da operação.


let calculadoraSimples = (n1, n2, operador) => {
    if(operador == '*'){
        return n1 * n2
    } else if (operador == '-'){
       return n1 - n2
    }
}


console.log(calculadoraSimples(2, 4,"*")) //8
console.log(calculadoraSimples(5, 10, "-")) //-5