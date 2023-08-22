// Num bolo de aniversário existem várias velas.

// Cada elemento do array velas é um booleano que tem o valor  se a vela estiver acesa e  se estiver apagada.

// Implementa a função encontraUltimaVelaAcesa de forma a que seja sempre retornado o índice da última vela acesa.

// function encontraUltimaVelaAcesa(velas) {
//     // TODO
//     let ultimaVelaAcesa = 0;
//     for (let i = 0; i <= velas.length; i++) {
//         if (velas[i] === true) {
//             ultimaVelaAcesa = velas.lastIndexOf(velas[i]);
//         }
//     }
//     return ultimaVelaAcesa;
// }
function encontraUltimaVelaAcesa(velas) {
  // TODO
  return velas.lastIndexOf(true);
}