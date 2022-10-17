// EXERCÍCIO - REVISÃO DE OPERADORES LÓGICOS
// Um parque de diversões te contratou para fazer um sistema que permite ou proíbe a entrada de pessoas em um brinquedo MUITO RADICAL.
// Para entrar, é necessário:
// Ter mais de 18 anos.
const idade = Number(prompt('Quantos anos você tem?'));
console.log(`Você tem ${idade} anos.`)

// Ter mais de 1,60m de altura.
const altura = Number(prompt('Qual a sua altura? Separe metro de centímetros com um ponto.'));
console.log(`Você tem ${altura}m de altura.`)

// Não ter nenhum problema cardíaco.
const cardio = prompt('Você tem algum problema cardíaco? S para sim e N para não');
if(cardio === 'N'){
    console.log(`Você não tem nenhum problema cardíaco.`)

}else{
    console.log(`Você tem problemas cardíacos.`)
}

// Faça essas perguntas ao usuário e diga o resultado no console.
if(idade >= 18 && altura >= 1.60 && cardio === 'N'){
    console.log('Você pode entrar no brinquedo!')
}else if(idade < 18 && altura < 1.60 && cardio !== 'N'){
    console.log('Você pode entrar no brinquedo por conta da sua idade, altura e problemas cardíacos!')
}else if(idade >= 18 && altura >= 1.60){
    console.log('Infelizmente você não pode entrar no brinquedo por conta do seu problema cardíaco!')
}else if(idade >= 18 && cardio === 'N'){
    console.log('Infelizmente você não pode entrar no brinquedo por conta da sua altura!')
}else{
    console.log('Infelizmente você não pode entrar no brinquedo por conta da sua idade!')
};