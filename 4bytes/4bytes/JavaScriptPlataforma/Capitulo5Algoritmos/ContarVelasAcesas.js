// Num bolo de aniversário existem várias velas.

// Cada elemento do array velas é um booleano que tem o valor  se a vela estiver acesa e  se estiver apagada.

// Implementa a função contaVelasAcesas de forma a que seja sempre retornado o número de velas acesas.


function contaVelasAcesas(velas) {
    // TODO
    let velasAcesas = 0
    for(let i = 0; i <= velas.length; i++){
        if(velas[i]=== true){
            velasAcesas++
        } else {
            velasAcesas
        }
    }
    return velasAcesas
}