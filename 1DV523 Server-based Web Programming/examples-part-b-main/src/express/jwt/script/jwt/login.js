if (process.argv.length != 4) {
  console.error('ERROR. You need to send two arguments like this: <user> <password>')
}

const username = process.argv[2]
const password = process.argv[3]
const url = 'http://localhost:3000/api/v1/authenticate/login'
const body = {
  username: username,
  password: password
}
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
}

let response = await fetch(url, options)
let data = await response.json()
console.log(response.status)
console.log(data)
//console.log(response.headers)
