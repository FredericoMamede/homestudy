function comparaPalavras(str1, str2) {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    return "As palavras sao identicas.";
  } else {
    return "As palavras sao diferentes.";
  }
}

console.log(comparaPalavras("ByTEs", "bytes"));
console.log(comparaPalavras("Olá", "Adeus"));
