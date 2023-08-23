// Num bolo de aniversário existem várias velas.

// No array velas é indicado o tamanho de cada uma das velas.

// Implementa a função contarVelasMaisAltas de forma a que seja sempre retornado o número de velas que têm o maior tamanho.

function contarVelasMaisAltas(velas) {
    let maiorVela = 0
    let contador = 0
    for(let i = 0; i < velas.length; i++){
        if(maiorVela < velas[i]){
            maiorVela = velas[i]
        }
    }
    for(let i = 0; i < velas.length; i ++){
        if(maiorVela === velas[i]){
            contador++
        }
    }
    return contador
}