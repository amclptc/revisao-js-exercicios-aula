// EXERCÍCIO - REVISÃO DE ARRAYS
//  Dada a lista ['batata', 'cenoura', 'beterraba'] realize as operações:
const lista = ['batata', ' cenoura', ' beterraba'];

//  Imprima o segundo item da lista.
console.log(`O segundo item da lista é ${lista[1]}`);

//  Imprima o tamanho da lista.
console.log(`O tamanho da lista é de ${lista.length} itens.`);

//  Adicione o item 'mandioca'
lista.push(' mandioca');
console.log(`A lista atualizada é a seguinte: ${lista}`);

//  Verifique se há um item chamado cenoura.
console.log(`Tem cenoura nessa lista? ${lista.includes(' cenoura')}`);

//  Remova o item de índice 1.
lista.splice(1, 1);
console.log(`A lista atualizada é a seguinte: ${lista}`);