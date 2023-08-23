// Cria uma variável do tipo number com o nome max.

// Guarda nessa variável o maior valor presente no array.

let array = [4, 1, 4, 5]
let max = 0
for(let i = 0; i < array.length; i++){
    if(max < array[i]){
        max = array[i]
    }
}