// A fórmula resolvente serve para resolver equações de segundo grau.

// Neste exercício deves implementar a função formulaResolvente que recebe 3 argumentos: a, b e c.

// Se a equação tiver solução, deves retornar um array com as soluções possíveis. No indíce 0 deve estar a solução que resulta da utilização do , e no índice 1 deve estar a solução que resulta da utilização do 

// Se a equação não tiver solução, deves retornar o texto "Sem Solução".

// Notas:
// A fórmula resolvente é utilizada para resolver equações de segundo grau, ou seja, equações com a forma ;
// As equações de 2º grau têm duas soluções ou não têm solução. Não têm solução se o interior da raíz quadrada for menor que 0.
// A fórmula resolvente é:


function formulaResolvente(a, b, c) {
    // TODO
    let resolvente = (b * b) - (4 * a * c);

    if (resolvente < 0) {
        return "Sem Solução";
    } 
     else {
        let raiz2 = (-b - Math.sqrt(resolvente)) / (2 * a);
        let raiz1 = (-b + Math.sqrt(resolvente)) / (2 * a);
        return [raiz2, raiz1];
    }
}

console.log(formulaResolvente(1, -3, 2));
console.log(formulaResolvente(1, -2, 1));
