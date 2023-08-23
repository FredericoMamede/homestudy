// Num bolo de aniversário existem várias velas.

// Cada elemento do array velas é um booleano que tem o valor  se a vela estiver acesa e  se estiver apagada.

// Implementa a função ordenaVelasAcesasPrimeiro de forma a que o array fique com as velas acesas no início.

// Nota que no exemplo apresentado no vídeo existe um pequeno bug que não altera o resultado. Consegues descobrir qual é?


function ordenaVelasAcesasPrimeiro(velas) {
    let ordenaVelas = velas.sort()
    let reverseVelas = ordenaVelas.reverse()
    return reverseVelas
}

