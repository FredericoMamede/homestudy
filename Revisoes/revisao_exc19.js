function dobroDosPares(arr) {
  let resultado = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      resultado.push(arr[i] * 2);
    } else {
      resultado.push(arr[i]);
    }
  }
  return resultado;
}

console.log(dobroDosPares([1, 2, 3, 4, 5, 6]));
console.log(dobroDosPares([2, 5, 4, 3, 2, 2, 7]));
