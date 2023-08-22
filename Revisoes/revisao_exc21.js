function verificaTriangulo(l1, l2, l3) {
  if (l1 === l2 && l2 === l3) {
    return "Triangulo equilatero";
  } else if (l1 === l2 || l2 === l3 || l1 === l3) {
    return "Triangulo isosceles";
  } else {
    return "Triangulo escaleno";
  }
}

console.log(verificaTriangulo(2, 2, 2));
console.log(verificaTriangulo(1, 2, 3));
console.log(verificaTriangulo(3, 2, 3));
