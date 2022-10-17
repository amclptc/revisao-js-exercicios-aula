// EXERCÍCIO - REVISÃO DE COMPARADORES
// Sorteie um número aleatório entre 1 e 10.
const num = parseInt(Math.random()*10);
console.log(`O número sorteado foi ${num}`);

// Peça ao usuário inserir um número de 1 a 10.
const num2 = Number(prompt('Insira aqui um número de 1 a 10:'));

// Imprima no console os dois números dizendo se o que foi digitado pelo usuário é menor, maior ou igual ao sorteado.
console.log(`${num} é menor que ${num2}? ${num<num2}\n${num} é maior que ${num2}? ${num>num2}\n${num} é igual o ${num2}? ${num === num2}`);