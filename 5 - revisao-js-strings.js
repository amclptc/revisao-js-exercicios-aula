// EXERCÍCIO - REVISÃO DE STRINGS
// Dada a frase " Hoje vou comer cenoura, ebaaa " realize as operações:
// Imprima a frase inicial juntamente com seu tamanho.
const fraseInicial = " Hoje vou comer cenoura, ebaaa ";
console.log(`A frase é \"${fraseInicial}\" e ela possui ${fraseInicial.length} caracteres.`);

// Retire os espaços do início e do fim.
console.log(fraseInicial.trim());

// Faça com que possua apenas letras minúsculas.
console.log(fraseInicial.toLocaleLowerCase());

// Verifique se as palavras comer e batata estão presentes.
console.log(fraseInicial.includes('comer'));
console.log(fraseInicial.includes('batata'));

// Substitua cenoura por batata
const novaFrase = fraseInicial.replace('cenoura', 'batata');
console.log(novaFrase);

// Verifique novamente se possui as palavras comer e batata.
console.log(novaFrase.includes('comer'));
console.log(novaFrase.includes('batata'));