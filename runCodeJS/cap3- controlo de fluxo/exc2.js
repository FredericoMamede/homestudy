// Cria uma variável do tipo string com o nome equacao.

// Utiliza ciclos para colocar nessa variável todos os valores do array, separados por " + ".

// No final, acrescenta também " = " seguido da soma dos números presentes no array.


let array = [4, 1, 4, 5]

let equacao = "";

let i = 0;

let soma = 0;

while (i < array.length) {
    equacao += array[i];

    soma += array[i];

    if (i < array.length - 1) {
        equacao += " + ";
    }
    i++;
}

equacao += " = " + soma;

console.log(equacao);
