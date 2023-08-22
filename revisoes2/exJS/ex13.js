//Cria uma função que troque os valores de duas variáveis. Por exemplo, se a for 5 e b for 10, após a troca a deve ser 10 e b deve ser 5.


function trocaArgumentos(n1, n2){
    if(String(n1) > String(n2)){
        return `a = ${n2}, b = ${n1}`
    } else {
        return `a = ${n1}, b = ${n2}`
    }
}




console.log(trocaArgumentos(5, 10)) //a = 10, b = 5
console.log(trocaArgumentos(8, 0)) //a = 0, b = 8