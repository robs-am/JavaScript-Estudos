const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);


const idadeComprador = 17;
const estaAcompanhada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// Pode-se adicionar elementos dentro de uma lista constante, mas nao pode alterar a lista em si

if (
    idadeComprador >= 18
    estaAcompanhada == true) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(2, 1);


} else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(2, 1); //removendo item

} else {

    console.log("Não é maior de idade e não posso vender");

}


console.log(listaDeDestinos);

//Imprime um elemento espeícfico da lista de acordo com a posição entre colchetes