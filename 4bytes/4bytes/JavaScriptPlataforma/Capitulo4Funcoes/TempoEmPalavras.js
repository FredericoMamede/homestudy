// A função tempoEmPalavras recebe como argumentos a hora(h) e o minuto(m).

// Implementa a função para retornar a hora dita em português com os numeros por extenso. Por exemplo:

// 10:30 - dez e meia
// 2:05 - duas e cinco
// 4:45 - um quarto para as cinco
// 12:00 - meio dia em ponto
// 11:50 - dez para o meio dia
// 14:23 - duas e vinte e três Regras:
// A hora varia entre 0 e 23
// O minuto varia entre 0 e 59
// Depois do minuto 30, deve ser dito, por exemplo, "dez para as cinco"
// 12 horas devem ser lidas como meio dia
// 00 horas devem ser lidas como meia noite
// As horas da tarde devem ser lidas iguais às da manhã, excepto meio dia e meia noite
// A hora certa deve ser seguida pela expressão "em ponto",
// 30 minutos devem ser lidos como "meia"
// 15 minutos devem ser lidos como "um quarto"

function tempoEmPalavras(h, m) {
    let horas = h
    let minutos = m

    if (minutos >=0 && minutos <=59) {
    if (minutos === 0){
        minutos = 'em ponto'
    } else if (minutos === 1){
        minutos = 'e um'
    } else if (minutos === 2){
        minutos = 'e dois'
    } else if (minutos === 3){
        minutos = 'e três'
    } else if (minutos === 4){
        minutos = 'e quatro'
    } else if (minutos === 5){
        minutos = 'e cinco'
    } else if (minutos === 6){
        minutos = 'e seis'
    } else if (minutos === 7){
        minutos = 'e sete'
    } else if (minutos === 8){
        minutos = 'e oito'
    } else if (minutos === 9){
        minutos = 'e nove'
    } else if (minutos === 10){
        minutos = 'e dez'
    } else if (minutos === 11){
        minutos = 'e onze'
    } else if (minutos === 12){
        minutos = 'e doze'
    } else if (minutos === 13){
        minutos = 'e treze'
    } else if (minutos === 14){
        minutos = 'e catorze'
    } else if (minutos === 15){
        minutos = 'e um quarto'
    } else if (minutos === 16){
        minutos = 'e dezasseis'
    } else if (minutos === 17){
        minutos = 'e dezassete'
    } else if (minutos === 18){
        minutos = 'e dezoito'
    } else if (minutos === 19){
        minutos = 'e dezanove'
    } else if (minutos === 20){
        minutos = 'e vinte'
    } else if (minutos === 21){
        minutos = 'e vinte e um'
    } else if (minutos === 22){
        minutos = 'e vinte e dois'
    } else if (minutos === 23){
        minutos = 'e vinte e três'
    } else if (minutos === 24){
        minutos = 'e vinte e quatro'
    } else if (minutos === 25){
        minutos = 'e vinte e cinco'
    } else if (minutos === 26){
        minutos = 'e vinte e seis'
    } else if (minutos === 27){
        minutos = 'e vinte e sete'
    } else if (minutos === 28){
        minutos = 'e vinte e oito'
    } else if (minutos === 29){
        minutos = 'e vinte e nove'
    } else if (minutos === 30){
        minutos = 'e meia'
    } else if (minutos === 31){
        horas++
        minutos = 'vinte e nove'
    } else if (minutos === 32){
        horas++
        minutos = 'vinte e oito'
    }else if (minutos === 33) {
        horas++
        minutos ='vinte e sete'
    } else if (minutos === 34){
        horas++
        minutos ='vinte e seis'
    }  else if (minutos === 35){
        horas++
        minutos = 'vinte e cinco'
    } else if (minutos === 36){
        horas++
        minutos = 'vinte e quatro'
    } else if (minutos === 37){
        horas++
        minutos = 'vinte e três'
    } else  if (minutos === 38) {
        horas ++
        minutos = 'vinte e dois'
    } else if (minutos === 39){
        horas++
        minutos = 'vinte e um'
    } else if (minutos === 40){
        horas++
        minutos = 'vinte'
    } else if (minutos === 41){
        horas++
        minutos = 'dezanove'
    } else if (minutos === 42){
        horas++
        minutos = 'dezoito'
    } else if (minutos === 43){
        horas++
        minutos = 'dezassete'
    } else if (minutos === 44){
        horas++
        minutos = 'dezasseis'
    } else if (minutos === 45){
        horas++
        minutos = 'um quarto'
    } else if (minutos === 46){
        horas++
        minutos = 'catorze'
    } else if (minutos === 47){
        horas++
        minutos = 'treze'
    } else if (minutos === 48){
        horas++
        minutos = 'doze'
    } else if (minutos === 49){
        horas++
        minutos = 'onze'
    } else if (minutos === 50){
        horas++
        minutos = 'dez'
    } else if (minutos === 51){
        horas++
        minutos = 'nove'
    } else if (minutos === 52){
        horas++
        minutos = 'oito'
    } else if (minutos === 53){
        horas ++
        minutos = 'sete'
    } else if (minutos === 54){
        horas++
        minutos = 'seis'
    } else if(minutos===55){
        horas++
        minutos = 'cinco'
    } else if (minutos === 56){
        horas++
        minutos= 'quatro'
    } else if (minutos === 57){
        horas++
        minutos = 'três'
    } else if (minutos === 58){
        horas++
        minutos = 'dois'
    } else if (minutos === 59){
        horas++
        minutos = 'um'
    }
    }
    
    
    if (horas >= 0 && horas <=24) {
        if (horas === 0 || horas >= 24) {
            horas = "meia noite"
        } else if (horas === 1 || horas === 13){
            horas = "uma"
        }  else if (horas === 2 || horas === 14){
            horas = "duas"
        } else if (horas === 3 || horas === 15){
            horas = "três"
        } else if (horas === 4 || horas === 16){
            horas = "quatro"
        } else if (horas === 5 || horas === 17){
            horas = 'cinco'
        } else if (horas === 6 || horas === 18){
            horas = 'seis'
        } else if (horas === 7 || horas === 19) {
            horas = 'sete'
        } else if (horas === 8 || horas === 20){
            horas = 'oito'
        } else if (horas === 9 || horas === 21){
            horas = 'nove'
        } else if (horas === 10 || horas === 22){
            horas = 'dez'
        } else if (horas === 11 || horas === 23){
            horas = 'onze'
        } else if (horas === 12){
            horas = 'meio dia'
        }
    }

    if (m > 30 && (h < 1 || h == 23 || h == 12)) {
        return `${minutos} para a ${horas}`
    } else if(m > 30 && h == 11) {
        return `${minutos} para o ${horas}`
    } else if (m > 30){
        return `${minutos} para as ${horas}`
    } else {
        return `${horas} ${minutos}`
    }
}
console.log(tempoEmPalavras(11, 40))