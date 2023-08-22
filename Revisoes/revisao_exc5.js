function calculaSoma(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}
console.log(calculaSoma([1, 2, 3]));
console.log(calculaSoma([2, 3, 5, 8, 1, 2, 3]));