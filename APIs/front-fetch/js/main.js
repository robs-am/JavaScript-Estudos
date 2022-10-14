const url = "http://localhost:5500/api"

function getUsers () {
    fetch(url)
    .then() //se o fecth funcionar, retorna para  o then
    .catch( error => console.error) //se nao funcionar, cai no cath e dá um erro
}