console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);
listaDeDestinos.push("Curitiba");  //Adicionando um item na lista
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// Pode-se adicionar elementos dentro de uma lista constante, mas nao pode alterar a lista em si

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

//Deleta um item específico da lista, contagem começa no 0

console.log(listaDeDestinos[1]);

//Imprime um elemento espeícfico da lista de acordo com a posição entre colchetes



