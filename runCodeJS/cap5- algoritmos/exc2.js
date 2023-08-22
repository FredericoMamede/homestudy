// Num bolo de aniversário existem várias velas.

// Cada elemento do array velas é um booleano que tem o valor  se a vela estiver acesa e  se estiver apagada.

// Implementa a função encontraPrimeiraVelaApagada de forma a que seja sempre retornado o índice da primeira vela apagada.

function encontraPrimeiraVelaApagada(velas) {
  // TODO
  for (let i = 0; i < velas.length; i++) {
      if (!velas[i]) {
          return i;
      }
  }
}

const velasAniversario = [true, false, true, false, false];
const indiceDaPrimeiraVelaApagada = encontraPrimeiraVelaApagada(velasAniversario);

console.log(`${indiceDaPrimeiraVelaApagada}`);