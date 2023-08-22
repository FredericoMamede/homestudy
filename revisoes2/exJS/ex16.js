//Dado um array de palavras, cria uma função chamada maisLonga que retorna a palavra mais longa do array.



function maisLonga(array){
    let palavraLonga = ''
    for(let i in array){
        if(palavraLonga.length < array[i].length){
            palavraLonga = array[i]
        }
    }
    return palavraLonga
}




console.log(maisLonga(['Olá', 'do', 'Bytes'])) //Bytes
console.log(maisLonga(['cão', 'pássaro', 'gato', 'rato'])) //pássaro