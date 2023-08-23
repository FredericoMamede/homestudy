// Cria uma variável do tipo number com o nome min.

// Guarda nessa variável o menor valor positivo presente no array.


let array = [4, 1, -5, 4, 5]
let min = array[0]
for(let i = 0; i< array.length;i++){
    if(min > array[i] && array[i] > 0){
        min = array[i]
    }
}