/**
 * Use builtin fetch to get JSON data from a server.
 */
import * as Fetch from './modules/Fetch.mjs'

// Do a DELETE request
const url7 = 'http://localhost:3000/persons/13'
const body7 = {
  //id: 13
}

const resp7 = await Fetch.del(url7, body7)

console.log('Delete the person using DELETE\n', resp7)
