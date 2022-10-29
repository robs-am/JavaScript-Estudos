alert("Seja bem vindo ao meu site!")

function clique() {
    let numero = window.prompt("Digite um número:")
    

    let quadruplo = (parseInt(numero) * 4)
    let metade = (parseInt(numero) / 2)

    document.getElementById("texto").innerHTML = "O quádruplo de " + numero + " é igual a " + quadruplo + " e sua metade é igual a " + metade
}