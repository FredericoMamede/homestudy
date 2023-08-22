function classificaNumero(num) {
  if (num === 0) {
    return "Zero";
  } else if (num < 0) {
    return "Negativo";
  } else {
    return "Positivo";
  }
}

console.log(classificaNumero(10));
console.log(classificaNumero(-4));
console.log(classificaNumero(0));
