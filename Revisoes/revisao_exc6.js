let contador = 0;

function incrementar() {
  contador++;
}

function obterContagem() {
  return contador;
}

incrementar();
console.log(obterContagem());