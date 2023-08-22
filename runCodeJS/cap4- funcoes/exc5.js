// Num bolo de aniversário existem várias velas.

// No array velas é indicado o tamanho de cada uma das velas.

// Implementa a função contarVelasMaisAltas de forma a que seja sempre retornado o número de velas que têm o maior tamanho.

function contarVelasMaisAltas(velas) {
  // TODO
  let maiorAltura = Math.max(...velas);
  let velasMaisAltas = velas.filter(altura => altura === maiorAltura);

  return velasMaisAltas.length;
}

const velas = [4, 4, 1, 8, 6, 8, 8, 2];
console.log(contarVelasMaisAltas(velas));