// Implementa a função somatorio que retorna a soma de todos os valores presentes no array de números arr.

function somatorio(arr) {
  // TODO
  let resultado = 0;
  for ( let i = 0; i < arr.length; i++) {
      resultado += arr[i];
  }
  return resultado;
}


console.log(somatorio([2, 5]))