function filtraPares(arr) {
  let resultado = arr.filter((numero) => numero % 2 === 0);
  return resultado;
}

console.log(filtraPares([1, 2, 3, 4, 5, 6]));
console.log(filtraPares([2, 5, 4, 3, 2, 2, 7]));
