//Cria uma função que aceite dois números como argumentos e retorna o maior deles.

let verificaMaiorNumero = (n1,n2) => {
    if(n1 > n2){
        return n1
    } else {
        return n2
    }
}


console.log(verificaMaiorNumero(4, -6)) //4
console.log(verificaMaiorNumero(4, 9)) //9