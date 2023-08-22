function calculadoraSimples(num1, num2, str) {
  let resultado;
  switch (str) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    default:
      return (resultado = "Invalid operator");
  }
  return resultado;
}

console.log(calculadoraSimples(2, 0, "/"));
console.log(calculadoraSimples(0, 2, "-"));
