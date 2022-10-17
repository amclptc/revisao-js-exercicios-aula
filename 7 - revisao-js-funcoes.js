// EXERCÍCIO - REVISÃO DE FUNÇÕES
//Crie uma função que:
// Receba um array de números e retorne um novo array com o último e o primeiro número do array recebido divididos por dois.
const arrayDeNumeros = [14, 9, 7, 14, 22];

const modificaArray = (array) => {
    const primeiro = array[0] / 2;
    const ultimo = array[array.length - 1] / 2;
    array[0] = primeiro;
    arrayDeNumeros[array.length - 1] = ultimo;

    return array;
}

console.log(modificaArray(arrayDeNumeros));