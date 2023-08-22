function maisLonga(arr) {
  let palavraMaisLonga = arr.reduce((longest, current) => { 
    return current.length > longest.length ? current : longest;
  }, ''); 
// arrow function is being used to determinewhich word is longer between the current word and the longest word found so far
  return palavraMaisLonga;

}

// function maisLonga(array){
//   let palavraLonga = ''
//   for(let i in array){
//       if(palavraLonga.length < array[i].length){
//           palavraLonga = array[i]
//       }
//   }
//   return palavraLonga
// }


console.log(maisLonga(['Olá', 'do', 'Bytes'])) 
console.log(maisLonga(['cão', 'pássaro', 'gato', 'rato']))