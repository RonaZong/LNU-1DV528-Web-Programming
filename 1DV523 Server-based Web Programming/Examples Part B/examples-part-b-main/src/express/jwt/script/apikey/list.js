const url = 'http://localhost:3000/api/v1/apikey/list'
const options = {
  method: 'GET',
}

console.log(url)

let response = await fetch(url, options)
let data = await response.json()

console.log(response.status)
console.log(data)
//console.log(response.headers)
