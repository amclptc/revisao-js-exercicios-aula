// EXERCÍCIO - REVISÃO DE CONDICIONAIS
// RECEBA UM NÚMERO DO USUÁRIO
// SE FOR PAR, IMPRIMA: É PAR
// SENÃO, IMPRIMA: É IMPAR

const num = Number(prompt('Digite aqui um número:'));

if(num % 2 === 0){
    console.log('O seu número é par!');
}else{
    console.log('O seu número é ímpar!');
}

//Receba do usuário o nome de um bichinho:
const pet = prompt('Digite qual é o seu bichinho:');

// Se for cachorro, retorne: Au au
// Se for um gato, retorne: Miau
// Se for uma vaca, retorne: Muuu
// Se for outro bichinho, retorne: sem barulho reconhecido :(
// Faça utilizando if/else
if(pet === 'cachorro'){
    console.log('Au au');
}else if(pet === 'gato'){
    console.log('Miau');
}else if(pet === 'vaca'){
    console.log('Muuu');
}else{
    console.log('Sem barulho reconhecido :(');
}

//e switch case:
switch(pet){
    case 'cachorro':
        console.log('Au au');
        break;
    case 'gato':
        console.log('Miau');
        break;
    case 'vaca':
        console.log('Muuu');
        break;
    default: 
        console.log('Sem barulho reconhecido :(');
}
