//Cria uma função chamada diaDaSemana que recebe um número de 1 a 7 como argumento e retorna o dia correspondente da semana (por exemplo, 1 retorna "Domingo", 2 retorna "Segunda-feira" e assim por diante).



let array = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado' ]

let diaDaSemana = d => array[d-1]

console.log(diaDaSemana(1)) //Domingo
console.log(diaDaSemana(5)) //Quinta-feira