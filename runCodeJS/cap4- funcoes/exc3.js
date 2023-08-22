// O Teorema de Pitágoras permite-nos calcular a dimensão da hipotenusa de um triângulo rectângulo.

// Implementa a função teoremaDePitagoras que recebe como argumento os comprimentos dos dois catetos e retorna o valor da hipotenusa.

function teoremaDePitagoras(c1, c2) {
  // TODO
  let hipotenusa = 0;

  hipotenusa = Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2));

 return hipotenusa;
}

console.log(teoremaDePitagoras(2, 4));