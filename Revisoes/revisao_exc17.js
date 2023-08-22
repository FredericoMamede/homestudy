function diaDaSemana(num) {
  switch (num) {
    case 1:
      return "Domingo";
      break;
    case 2:
      return "Segunda-feira";
      break;
    case 3:
      return "Terca-feira";
      break;
    case 4:
      return "Quarta-feira";
      break;
    case 5:
      return "Quinta-feira";
      break;
    case 6:
      return "Sexta-feira";
      break;
    case 7:
      return "Sabado";
      break;
      default:
        return "Por Favor Insira um numero de 1 a 7";
  }
}

console.log(diaDaSemana(1));
console.log(diaDaSemana(5));