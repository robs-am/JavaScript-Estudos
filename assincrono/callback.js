function imprimirDado(dado) {
    console.log('outras tarefas')
    console.log(dado())
}

/* imprimirDado(1);
imprimirDado('texto');
imprimirDado('true');
imprimirDado([1,2,5,10])
imprimirDado({ nome: 'João'}) */

imprimirDado(function() {
    return 'Olá, mundo'
})

//call back é uma função que é passada como argumento para outra função e depois de um certo tempo ela será chamada de volta
