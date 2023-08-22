// Escreva uma função que determine se um número é primo ou não.


function verificaPrimo(n){
    for(let i = 2; i <= n; i++){
        if(n % i === 0){
            return `o numero ${n} nao e primo`
        } else {
            return `O numero ${n} e primo`
        }
    }
}



console.log(verificaPrimo(11)) //O número 11 é primo.
console.log(verificaPrimo(28)) //O número 28 não é primo.