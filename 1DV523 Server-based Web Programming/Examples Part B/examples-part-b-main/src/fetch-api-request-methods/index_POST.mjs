/**
 * Use builtin fetch to get JSON data from a server.
 */
import * as Fetch from './modules/Fetch.mjs'

// Do a POST request
const url3 = 'http://localhost:3000/persons'
const body3 = {
  firstName: 'Mikael',
  lastName: 'Roos'
}

const resp3 = await Fetch.post(url3, body3)

console.log('Added an entry using POST\n', resp3)
