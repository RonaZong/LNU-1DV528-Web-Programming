/**
 * Use builtin fetch to get JSON data from a server.
 */
import * as Fetch from './modules/Fetch.mjs'

console.log('Ready to go to work')

// The url to access
const url = 'http://localhost:3000/persons'

// Do a fetch request on that url using await
const response = await fetch(url)

// Get the response as json (asynchronous request)
const data = await response.json()

// Print out the data raw and formatted as a string
console.log(data)
console.log(JSON.stringify(data, null, 2))

// Wrapping the code into a module
const url1 = 'http://localhost:3000/persons'
const url2 = 'http://localhost:3000/persons/1'

const resp1 = await Fetch.get(url1)
const resp2 = await Fetch.get(url2)

console.log('GET', resp1)
console.log('GET', resp2)

// Do a POST request
const url3 = 'http://localhost:3000/persons'
const body3 = {
  firstName: 'Mikael',
  lastName: 'Roos'
}

const resp3 = await Fetch.post(url3, body3)

console.log('POST', resp3)

// Do a PUT request (replace the whole item)
const url5 = 'http://localhost:3000/persons/13'
const body5 = {
  id: 13,
  firstName: 'Mikael (mos)',
  lastName: 'Roos-ish'
}

const resp5 = await Fetch.put(url5, body5)

console.log('PUT', resp5)

// Do a PATCH request (only update its parts)
const url6 = 'http://localhost:3000/persons/13'
const body6 = {
  id: 13,
  lastName: 'Roos-mos'
}

const resp6 = await Fetch.patch(url6, body6)

console.log('PATCH', resp6)

// Do a DELETE request
const url7 = 'http://localhost:3000/persons/13'
const body7 = {
  id: 13
}

const resp7 = await Fetch.del(url7, body7)

console.log('DELETE', resp7)

// Provoke an exception using a 404 url
const url4 = 'http://localhost:3000/persons_NO'

try {
    const resp4 = await Fetch.get(url4)
    console.log(resp4)
} catch (ex) {
    console.log('This last 404 is intended and provoked!')
    console.log(ex)
}
