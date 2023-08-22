//Dado um array de números, cria uma função chamada dobroDosPares que retorna um novo array contendo os números ímpares iniciais assim como o dobro de todos os números pares.


let dobroDosPares = array => array.map(elementoDoArray => {
    if (elementoDoArray % 2 == 0){
       return elementoDoArray*2 
    } else {
       return elementoDoArray
    }
})




console.log(dobroDosPares([1,2,3,4,5,6])) //[1,4,3,8,5,12]
console.log(dobroDosPares([2,5,4,3,2,2,7])) //[4,5,8,3,4,4,7]