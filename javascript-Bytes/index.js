////////////////////////////////////////////////////////////////////////////////

// Javascript  3

// Undefined- exercise 1
// let indefinida // undefined
// Boolean(indefinidade) // false
// !indefinida // true

// Boolean- exercise 1

// Retorna verdade se apenas um dos argumentos e verdade
function umOuOutro(a, b) {
  return (a && !b) || (!a && b);
}

console.log(umOuOutro(true, true));
console.log(umOuOutro(false, true));
console.log(umOuOutro(true, false));
console.log(umOuOutro(false, false));

// Boolean- exercise 2

function umOuOutro(a, b, c) {
  (a && !b && !c) || (!a && b && !c) || (!a && !b && c);
}

// Boolean- exercise 3
function contrarioDoE(a, b) {
  return (!a && !b) || (!a && b) || (a && !b);
}

console.log(contrarioDoE(true, true));
console.log(contrarioDoE(false, true));
console.log(contrarioDoE(true, false));
console.log(contrarioDoE(false, false));

// Number- exercise 1

function perimetroDoQuadrado(lado) {
  return 4 * lado;
}

console.log(perimetroDoQuadrado(2));

// Number- exercise 2

function areaDoQuadrado(lado) {
  return lado * lado;
}

console.log(areaDoQuadrado(2));

// Number- exercise 3

function volumeDoCubo(lado) {
  return lado ** 3;
}

console.log(volumeDoCubo(2));

// BigInt- exercise 1

// BigInt(10) ** BigInt(3000) | 10n ** 3000n

// BigInt- exercise 2

function potenciaGrande(x, n) {
  return BigInt(x) ** BigInt(n);
}

console.log(potenciaGrande(1000, 312292));

// String- exercise 1

function insereLinhaEntre(primeira, segunda) {
  return primeira + "\n" + segunda;
}

console.log(insereLinhaEntre("ola", "Fred"));

// String- exercise 2

function apresentaPessoa(nome, idade) {
  return "O meu nome e " + nome + " e tenho " + idade + " anos.";
}

console.log(apresentaPessoa("Frederico", "26"));

// Comparison Operators- exercise 1

function comparaTexto(a, b) {
  const aString = a.toString();
  const bString = b.toString();

  if (aString > bString) {
    return aString;
  } else {
    return bString;
  }
}

console.log(comparaTexto(2, 10));
console.log(comparaTexto(1, 10));

// Comparison Operators- exercise 2

function comparaNumeros(a, b) {
  return a > b ? a : b;
}

console.log(comparaNumeros(2, 10));
console.log(comparaNumeros(1, 10));

///////////////////////////////////////////////////////////////////////////////
// Javascript  4

// if else- exercise 1

function garanteComprimentosDaString(str, n) {
  if (str.lenght > n) {
    return str.slice(0, n);
  } else if (str.lenght < n) {
    const spacesToAdd = n - str.lenght;
    return str + " ".repeat(spacesToAdd);
  } else {
    return str;
  }
}

console.log(garanteComprimentosDaString("abc", 6));
console.log(garanteComprimentosDaString("abcdefg", 6));

// if else- exercise 2

function calculaClassificacaoEtaria(n) {
  if (n >= 0 && n <= 1) {
    return "Lactente";
  } else if (n >= 2 && n <= 4) {
    return "Pre-escolar";
  } else if (n >= 5 && n <= 10) {
    return "Escolar";
  } else if (n >= 11 && n <= 17) {
    return "Adolescente";
  } else return "Por favor insira um numero de 0 a 17.";
}

console.log(calculaClassificacaoEtaria(-17));

// Switch case- exercise 1

function mesesDoAno(n) {
  let month = n;
  switch (month) {
    case 1:
      console.log("January");
      break;

    case 2:
      console.log("February");
      break;

    case 3:
      console.log("March");
      break;

    case 4:
      console.log("April");
      break;

    case 5:
      console.log("May");
      break;

    case 6:
      console.log("June");
      break;

    case 7:
      console.log("July");
      break;

    case 8:
      console.log("August");
      break;

    case 9:
      console.log("September");
      break;

    case 10:
      console.log("October");
      break;

    case 11:
      console.log("November");
      break;

    case 12:
      console.log("December");
      break;

    default:
      console.log("Mes Invalido");
  }
}

mesesDoAno(1);
mesesDoAno(10);

// Switch case- exercise 2

function mesesDoAno(str) {
  let month = str;

  switch (month) {
    case "jan":
      console.log("January");
      break;

    case "fev":
      console.log("February");
      break;

    case "mar":
      console.log("March");
      break;

    case "abr":
      console.log("April");
      break;

    case "maio":
      console.log("May");
      break;

    case "jun":
      console.log("June");
      break;

    case "jul":
      console.log("July");
      break;

    case "ago":
      console.log("August");
      break;

    case "set":
      console.log("September");
      break;

    case "out":
      console.log("October");
      break;

    case "nov":
      console.log("November");
      break;

    case "dec":
      console.log("December");
      break;

    default:
      console.log("Mes Invalido");
  }
}

mesesDoAno("jan");
mesesDoAno("out");

// Flow Control- exercise 1

function escadaComCardinais(n) {
  let stair = "";
  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const hash = "#".repeat(i);
    stair += spaces + hash + "\n";
  }
  return stair;
}

// Flow Control- exercise 2

function escadaComCardinais(n) {
  let stair = "";
  for (let i = 1; i <= n; i++) {
    stair += "#".repeat(i) + "\n";
  }

  return stair;
}

console.log(escadaComCardinais(7));

///////////////////////////////////////////////////////////////////////////////
// Javascript  5

// Exercicios Javascript

// exercicio - 1

let a = "Ola";
let b = "Mundo";
let c = `${a}  ${b}`;

console.log(c);

// exercicio - 2

let num = 100;
let str = "100";
let soma = num + Number(str);

console.log(soma);

// exercicio - 3

function contaParesEntreDoisValores(num1, num2) {
  let par = 0;
  if (num1 === num2) {
    return "Por favor introduza dois valores diferentes.";
  } else if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
      if (i % 2 == 0) {
        par++;
      }
    }
    return par;
  } else {
    for (let i = num1; i <= num2; i++) {
      if (i % 2 == 0) {
        par++;
      }
    }
    return par;
  }
}

console.log(contaParesEntreDoisValores(1, 2));

// exercicio - 4

function trimestre(t) {
  let tri = t;
  switch (tri) {
    case 1:
      return "Janeiro, Fevereiro, Marco";

    case 2:
      return "Abril, Maio, Junho";

    case 3:
      return "Julho, Agosto, Setembro";

    case 4:
      return "Outubro, Novembro, Dezembro";

    default:
      return "Numero invalido. Por favor insira um numero entre 1 e 4.";
  }
}

console.log(trimestre(2));

// exercicio - 5

function retornaArray(n) {
  let array = [];
  if (n < 0) {
    return "Por favor insira um numero superior a 0.";
  }
  for (let i = 0; i <= n; i++) {
    array.push(i);
  }
  return array;
}

console.log(retornaArray(4));

// exercicio - 6

function fizzBuzz(n) {
  if (n < 1) return [];

  if (n % 3 === 0 && n % 5 === 0) {
    return fizzBuzz(n - 1).concat(["FizzBuzz"]);
  } else if (n % 3 === 0) {
    return fizzBuzz(n - 1).concat(["Fizz"]);
  } else if (n % 5 === 0) {
    return fizzBuzz(n - 1).concat(["Buzz"]);
  } else {
    return fizzBuzz(n - 1).concat([" "]); //`${n}`
  }
}

console.log(fizzBuzz(15));

// function FizzBuzz(n) {
//   if (n < 0) {
//       console.log('Insere um nr inteiro'); // Display error message
//       return; // Exit the function
//   }

//   let array = []; // Create an empty array to store the results
//   for (let i = 1; i <= n; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//           array.push('FizzBuzz');
//       } else if (i % 3 == 0) {
//           array.push('Fizz');
//       } else if (i % 5 == 0) {
//           array.push('Buzz');
//       } else {
//           array.push(' ');
//       }
//   }

//   console.log(array); // Print the final array after the loop has executed
//   return array; // Return the array
// }

// FizzBuzz(15);

// exercicio - 7

let array = [1, 2, 3, 4, 5];
let sub2 = [1, 4];
let sub3 = [1, 3, 5];
let sub4 = [5, 2];
let sub5 = [2, 5];
let sub6 = [];

function validaSubArray(arr1, arr2) {
  if (arr2.length === 0) {
    return true;
  }

  let j = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[j]) {
      j++;
    }
    if (j === arr2.length) {
      return true;
    }
  }
  return false;
}

console.log(validaSubArray(array, sub2)); //true
console.log(validaSubArray(array, sub3)); //true
console.log(validaSubArray(array, sub4)); //false
console.log(validaSubArray(array, sub5)); //true

// exercicio - 8

array = [4, 1, 4, 5];

// reduce => iterates through the array, comparing each element with the curret maximum value ('a"), and updating it if the current ("b") is greater
let max = array.reduce((a, b) => Math.max(a, b));

console.log("max = ", max);

// exercicio - 9

array = [4, 1, 4, 5];

let min = array.reduce((a, b) => Math.min(a, b));

console.log("min = ", min);

// exercicio - 10

// array = [4, 6, 4, 5, 3, 6];

// let max = Math.max(...array);
// let maxIndex = array.indexOf(max);

// console.log("maxIndex = ", maxIndex);
