function conversorTemperatura(celsius) {
  let resultado = celsius * 9/5 + 32;
  return Math.round(resultado);
}

console.log(conversorTemperatura(20))
console.log(conversorTemperatura(-13))