const express = require('express')
 
const app = express() //guarda o express inicializado

app.listen('3000') //domínio do site, default

//criando um conteudo GET para o navegador

app.route('/').get((req, res) => res.send("hello")) 
app.route('/sobre').get((req, res) => res.send("hello sobre"))
//routes sao caminhos que o site irá fazer
// ('/') rota default localhost
//req, requisiçqo ; res, response
// res.send -> enviando para o navegador como resposta o "hello"