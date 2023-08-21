function tempoEmPalavras(h, m) {
    // TODO
    let horas = [
        "meia noite",
        "uma", 
        "duas",
        "três",  
        "quatro",
        "cinco",
        "seis",
        "sete",
        "oito",
        "nove",
        "dez",
        "onze",
        "doze"
    ];

    let minutos = [
        "em ponto",
        "um",
        "dois",
        "três",
        "quatro",
        "cinco",
        "seis",
        "sete",
        "oito",
        "nove",
        "dez",
        "onze",
        "doze",
        "treze",
        "catorze",
        "quinze",
        "dezasseis",
        "dezassete",
        "dezoito",
        "dezenove",
        "vinte",
        "vinte e um",
        "vinte e dois",
        "vinte e três",
        "vinte e quatro",
        "vinte e cinco",
        "vinte e seis",
        "vinte e sete",
        "vinte e oito",
        "vinte e nove",
        "meia"
    ];
 
    let hora = h;

    let periodo = "da manhã";

    if (h === 0) {
        hora = 12;
        periodo = "da manhã";
    } else if (h === 12) {
        periodo = "da tarde";
    } else if (h >= 12) {
        hora = h - 12;
        periodo = "da tarde";
    }

    let resultado = "";

    if(m === 0) {
        resultado = `${horas[hora]} ${periodo} em ponto`;
    } else if (m === 30) {
        resultado = `${minutos[m]} ${periodo}`;
    } else if (m === 15) {
        resultado = `um quarto para as ${horas[hora + 1]}`;
    } else if (m === 45) {
        resultado = `um quarto para as ${horas[hora + 1]}`;
    } else if (m < 30) {
        resultado = `${minutos[m]} para as ${horas[hora + 1]} `;
    } else {
        resultado = `${minutos[60 - m]} para as ${horas[hora + 1]}`;
    }
return resultado;
}

console.log(tempoEmPalavras(10,30));
console.log(tempoEmPalavras(2,5));
console.log(tempoEmPalavras(4,45));
console.log(tempoEmPalavras(12,0));
console.log(tempoEmPalavras(11,50));
console.log(tempoEmPalavras(14,23));