/* Você terá 3 variaveis: 
1- preço do combustivel 
2 - gasto medio de combustivel por km 
3- distancia em km da viagem

Imprima o valor que sera gasto de 
combustivel para realizar esta viagem */


const pcombustivel = 10;
const kmLitro = 10; //
const distancia = 50; //distancia em km

const litrosConsumidos = distancia / kmLitro; 
const valorGasto = litrosConsumidos * pcombustivel;
console.log(valorGasto);