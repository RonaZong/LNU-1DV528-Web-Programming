/**
 * Use builtin fetch to get JSON data from a server.
 */

const url = 'http://localhost:3000/persons/1'

const res = await fetch(url)
const json = await res.json()

console.log(res)
console.log(json)
