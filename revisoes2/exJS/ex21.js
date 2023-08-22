// Cria uma função que, dadas as medidas dos três lados de um triângulo, determine se ele é equilátero, isósceles ou escaleno.


function verificaTriangulo(l1, l2, l3) {

    if (l1 === l2 && l2 ===l3){
        return 'Triangulo equilatero'
    } else if (l3 > l2 && l3 > l1) {
        return 'Triangulo escaleno'
    } else {
        return 'Triangulo isosceles'
    }
}



console.log(verificaTriangulo(2,2,2)) //Triângulo equilátero.
console.log(verificaTriangulo(1,2,3)) //Triângulo escaleno.
console.log(verificaTriangulo(3,2,3)) //Triângulo isósceles.