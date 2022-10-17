// EXERCÍCIO - REVISÃO DE OBJETOS
// Crie um objeto que represente uma pessoa. Essa pessoa precisa ter nome, idade e gênero musical preferido.
const pessoa = {
    nome: 'Andersom',
    idade: 24,
    genero: 'rap'
}

// Imprima no console as propriedades desse objeto, seguindo o modelo abaixo: 
// "O nome da pessoa é _, ela tem _ anos e gosta muito de _."
console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.genero}.`);

// Crie uma nova pessoa, com mesma idade e gênero musical, mas nome diferente.
const novaPessoa = {
    ...pessoa,
    nome: 'Marcos'
}
console.log(`O nome da pessoa é ${novaPessoa.nome}, ela tem ${novaPessoa.idade} anos e gosta muito ${novaPessoa.genero}.`);
