//Cria uma função chamada filtraPares que recebe um array de números como argumento e retorna um novo array contendo apenas os números pares.



let filtraPares = array => array.filter(elemento => elemento % 2 == 0)

console.log(filtraPares([1,2,3,4,5,6])) //[2,4,6]
console.log(filtraPares([2,5,4,3,2,2,7])) //[2,4,2,2]
