/**
 * Use builtin fetch to get JSON data from a server.
 */
import * as Fetch from './modules/Fetch.mjs'

// Do a PATCH request (only update its parts)
const url6 = 'http://localhost:3000/persons/13'
const body6 = {
  //id: 13,
  lastName: 'Roos-mos'
}

const resp6 = await Fetch.patch(url6, body6)

console.log('Replace parts of the item using PATCH\n', resp6)

