//Declara uma variável global chamada contador e cria duas funções, incrementar e obterContagem, que incrementam o contador em 1 e retornam o valor do contador, respectivamente.

let contador = 0

let incrementar = contador => {
    contador++
    return obterContagem(contador)
}
let obterContagem = contador => console.log(contador)


incrementar(contador)
