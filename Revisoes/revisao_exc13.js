function trocaArgumentos(a, b) {
  let c = a;
  a = b;
  b = c;
  return `a = ${a}, b = ${b}`;
}

console.log(trocaArgumentos(5, 10));
console.log(trocaArgumentos(8, 0));
