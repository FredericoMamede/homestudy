function contadorParesImpares(arr) {
  let pares = 0;
  let impares = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }
  return `Pares: ${pares} e Impares: ${impares}`;
}

console.log(contadorParesImpares([2, 5, 4, 3, 2, 2, 7]));
console.log(contadorParesImpares([4, 2, 3, 5, 4, 6, 7, 8, 10, 2, 4]));
