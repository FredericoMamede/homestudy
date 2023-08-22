function inverteArrayComplex(arr) {
  let meio = arr.length / 2;

  let primeiraMetade = arr.slice(0, meio).reverse();
  let segundaMetade = arr.slice(meio, arr.length).reverse();

  return primeiraMetade.concat(segundaMetade);
}



console.log(inverteArrayComplex([3,5,2,6])) //[5,3,6,2]
console.log(inverteArrayComplex([1,2,3,4,5,6,7,8,9,10])) //[5,4,3,2,1,10,9,8,7,6]