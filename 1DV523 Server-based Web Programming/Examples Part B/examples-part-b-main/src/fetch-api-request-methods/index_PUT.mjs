/**
 * Use builtin fetch to get JSON data from a server.
 */
import * as Fetch from './modules/Fetch.mjs'

// Do a PUT request (replace the whole item)
const url5 = 'http://localhost:3000/persons/13'
const body5 = {
  id: 13,
  firstName: 'Mikael (mos)',
  lastName: 'Roos-ish'
}

const resp5 = await Fetch.put(url5, body5)

console.log('Replace the whole item using PUT\n', resp5)
