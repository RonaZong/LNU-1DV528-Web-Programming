if (process.argv.length != 3) {
  console.error('ERROR. You need to send one arguments like this: <API_KEY>')
  process.exit(1)
}

const API_KEY = process.argv[2]

const url = `http://localhost:3000/api/v1/apikey/try1?API_KEY=${API_KEY}`
const options = {
  method: 'GET',
}

console.log(url)

let response = await fetch(url, options)
let data = await response.json()

console.log(response.status)
console.log(data)
//console.log(response.headers)
