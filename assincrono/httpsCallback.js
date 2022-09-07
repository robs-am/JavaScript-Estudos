const https = require('http')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'
//FETCH - vai ate o site do json para buscar o resultado

https.get(API, res => {
	console.log(res.statusCode) 
})

//primeiro executara o argumento API e depois a resposta do arrow function

console.log('conectando API')