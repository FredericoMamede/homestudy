function verificaPrimo(num) {
  for(let i = 2; i <= num; i++){
    if(num % i === 0){
        return `o numero ${num} nao e primo`
    } else {
        return `O numero ${num} e primo`
    }
}
}

console.log(verificaPrimo(11));
console.log(verificaPrimo(28));
