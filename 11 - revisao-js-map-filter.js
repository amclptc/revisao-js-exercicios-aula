//EXERCÍCIO 13
//Dado um array de produtos onde cada produto possui nome, categoria e preço:
const produtos = [
    {nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5},
    {nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8},
    {nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6},
    {nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7},
    {nome: "Leite", categoria: "Bebidas", preco: 2.99},
    {nome: "Cândida", categoria: "Limpeza", preco: 3.30},
    {nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2},
    {nome: "Vinho Tinto", categoria: "Bebidas", preco: 55},
    {nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99},
    {nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80}
    ]

//Retorne um novo array com todos os produtos porém com o 10% de desconto no preço
const desconto = produtos.map((produto) => {
    return {...produto, preco: (produto.preco - (produto.preco / 100 * 10)).toFixed(2)
}})

console.log(desconto)

//Retorne um array apenas com os itens da categoria hortifruti
const hortifruti = produtos.filter((produto) => {
    return produto.categoria === "Hortifruti"
})
console.log(hortifruti)

//Retorne um array apenas com os itens de hortifruti E com 10% de desconto no preço
const diaDeFeira = produtos.filter((produto) => {
    return produto.categoria === "Hortifruti"
})

const promoFeira = diaDeFeira.map((produto) => {
    return {...produto, preco: (produto.preco - (produto.preco / 100 * 10)).toFixed(2)
}})
console.log(promoFeira)
