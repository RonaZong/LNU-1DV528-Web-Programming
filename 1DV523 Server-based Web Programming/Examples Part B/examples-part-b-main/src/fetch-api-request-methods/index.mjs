/**
 * Use builtin fetch to get JSON data from a server.
 */
import * as Fetch from './modules/Fetch.mjs'

console.log('Ready to go to work')

// Wrapping the code into a module
const url1 = 'http://localhost:3000/persons'
const url2 = 'http://localhost:3000/persons/1'

const resp1 = await Fetch.get(url1)
const resp2 = await Fetch.get(url2)

console.log('Show complete resultset:', 'GET', resp1)
console.log('Show resource with id=1, ', 'GET', resp2)
