const express = require('express')
 
const app = express() //guarda o express inicializado

app.listen('3000') //domínio do site, default

//middleware
app.use(express.json())

app.route('/').post((req, res)=> res.send(req.body))
//o navegador não consegue fazer .post, apenas o get, por isso irá falhar
//ir até o insomia, fazer uma request post, adicionar um JSON e criar um content no Body