// EXERCÍCIO - REVISÃO DE LAÇOS
// Receba um array com números e devolva qual o maior dentro dele.
// Faça utilizando as três estruturas de loop vista (while, for, for of).

// const nums = [7, 9, 14, 21];
// // let i = 0;
// let maiorNumero = -Infinity;

//RESOLVENDO COM WHILE:
// while(i < nums.length){
//     if(nums[i] > maiorNumero){
//         maiorNumero = nums[i]
//     }
//     i++;
// }
// console.log(`O maior número é ${maiorNumero}`);

//RESOLVENDO COM FOR:
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] > maiorNumero){
//         maiorNumero = nums[i]
//     }
// }
// console.log(`O maior número é ${maiorNumero}`);

//RESOLVENDO COM FOR OF:
// for(let num of nums){
//     if(num > maiorNumero){
//         maiorNumero = num;
//     }

// }
// console.log(`O maior número é ${maiorNumero}`);


//EXERCÍCIO 12:
const prof = {
    nome: 'Leticia Chijo',
    idade: 27,
    aulasFront: true,
    aulasBack: false,
    jogosFavoritos: ['Chrono Trigger', 'Undertale', 'Hollow Knight'],
    contaPiada: () => console.log('É pave ou pacume?'),
    pet: {
        nome: 'Polly',
        especie: 'cachorrinha',
        raca: 'Lhasa Apso',
        snacksFavoritos: ['biscoito', 'maçã', 'frango']
    }
}

aulasFront = prof.aulasFront;
aulasBack = prof.aulasBack;

if(aulasFront){
    profFront = 'Dou'
}else{
    profFront = 'Não dou'
}

if(aulasBack){
    profBack = 'dou'
}else{
    profBack = 'não dou'
}

console.log(`Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos.\n${profFront} aula de front e ${profBack} aula de back.\nMeus jogos favoritos são:\n1) ${prof.jogosFavoritos[0]}\n2) ${prof.jogosFavoritos[1]}\n3) ${prof.jogosFavoritos[2]}\nTenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer 
${prof.pet.snacksFavoritos[1]}.`);

prof.contaPiada();