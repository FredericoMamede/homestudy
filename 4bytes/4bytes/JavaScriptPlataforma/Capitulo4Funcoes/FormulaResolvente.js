// A fórmula resolvente serve para resolver equações de segundo grau.

// Neste exercício deves implementar a função formulaResolvente que recebe 3 argumentos: a, b e c.

// Se a equação tiver solução, deves retornar um array com as soluções possíveis. No indíce 0 deve estar a solução que resulta da utilização do , e no índice 1 deve estar a solução que resulta da utilização do 

// Se a equação não tiver solução, deves retornar o texto "Sem Solução".

// Notas:
// A fórmula resolvente é utilizada para resolver equações de segundo grau, ou seja, equações com a forma ;
// As equações de 2º grau têm duas soluções ou não têm solução. Não têm solução se o interior da raíz quadrada for menor que 0.
// A fórmula resolvente é: Fórmula Resolvente


function formulaResolvente(a, b, c) {
    let solucao = []
    let delta = (b*b) - (4*a*c)
    if(delta < 0){
        return "Sem Solução"
    } else {
        raiz1 = (-b - Math.sqrt(delta))/(2*a)
        raiz2 = (-b + Math.sqrt(delta))/(2*a)
        return solucao = [raiz1, raiz2]
    }
}