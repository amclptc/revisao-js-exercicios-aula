// EXERCÍCIO - REVISÃO DE VARIÁVEIS
//Crie uma variável para guardar o nome de um produto e peça para o usuário inserir esse nome.
const nomeDoProduto = prompt('Insira aqui o produto que deseja:');
console.log(`Você deseja ${nomeDoProduto}`);

//Crie uma variável para guardar o preço de um produto e peça para o usuário inserir esse valor.
let precoDoProduto = Number(prompt('Insira aqui o preço do seu produto:'));
console.log(`O preço do produto é R$${precoDoProduto}`);

//O GERENTE FICOU DOIDO! Dê um desconto de 1 real no preço do produto, guardando o novo preço na mesma variável.
precoDoProduto = precoDoProduto - 1;
console.log(`Com desconto, seu produto sai a R$${precoDoProduto}`);

// NOTES:
// Lembrar que posso declarar as variáveis com let quando existir a possibilidade de alterar o seu valor ao longo do código, facilita para 
// não precisar criar sempre uma nova variável.