function verificaPalindromo(str) {
  str = str.toLowerCase(); // Converter para lowercase
  let reverseStr = str.split('').reverse().join(''); // reverter a str

  return str === reverseStr;

}

console.log(verificaPalindromo("Osso"))
console.log(verificaPalindromo("Cão"))