/**
 *JavaScript main.
 */
// Import all exported functions from the module into an object
import * as Fetch from './modules/Fetch.js'

console.log('Ready to go to work')

// The url to access
const url = 'http://localhost:3000/users'

// Do a fetch request on that url using await
const response = await fetch(url)

// Get the response as json (asynchronous request)
const data = await response.json()

// Print out the data raw and formatted as a string
console.log(data)
console.log(JSON.stringify(data, null, 2))

// Wrapping the code into a module
const url1 = 'http://localhost:3000/users'
const url2 = 'http://localhost:3000/users/1'

const resp1 = await Fetch.get(url1)
const resp2 = await Fetch.get(url2)

console.log('GET', resp1)
console.log('GET', resp2)

// Do a POST request
const url3 = 'http://localhost:3000/users'
const body3 = {
  firstName: 'Mikael',
  lastName: 'Roos'
}

const resp3 = await Fetch.post(url3, body3)

console.log('POST', resp3)

// Do a PUT request (replace the whole item)
const url5 = 'http://localhost:3000/users/13'
const body5 = {
  id: 13,
  firstName: 'Mikael (mos)',
  lastName: 'Roos-ish'
}

const resp5 = await Fetch.put(url5, body5)

console.log('PUT', resp5)

// Do a PATCH request (only update its parts)
const url6 = 'http://localhost:3000/users/13'
const body6 = {
  id: 13,
  lastName: 'Roos-mos'
}

const resp6 = await Fetch.patch(url6, body6)

console.log('PATCH', resp6)

// Do a DELETE request
const url7 = 'http://localhost:3000/users/13'
const body7 = {
  id: 13
}

const resp7 = await Fetch.del(url7, body7)

console.log('DELETE', resp7)

// Provoke an exception using a 404 url
const url4 = 'http://localhost:3000/users_NO'

const resp4 = await Fetch.get(url4)

console.log(resp4)

/*

async function doFetch(url) {
  const response = await fetch(url)
  let data

  if (!response.ok) {
      data = await response.json()

      console.log(response)
      console.log(JSON.stringify(data, null, 4))

      throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response
}

/*

linkA.addEventListener("click", () => {
  let status = "Clicked A"

  updateContent(status)
  console.log(status)

  //fetch("https://lun.se/robots.txt")
  // fetch("https://rem.dbwebb.se/api/users", {
  //     credentials: "include"
  // })
  fetch("https://rem.dbwebb.se/api/users")
  .then((response) => {
      if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status)
          return
      }

      // Examine the text in the response
      response.json().then(function(data) {
          updateContent(JSON.stringify(data, null, 4))
          console.log(data)
      });
  })
  .catch((err) => {
      console.log('Fetch Error :-S', err)
  });
})

linkD.addEventListener("click", async () => {
  let status = "Clicked D"

  updateContent(status)
  console.log(status)

  // Quizz.getFirstQuestion()
  // .then(response => {
  //     console.log(response)
  //
  //     response.json().then((data) => {
  //         updateContent(JSON.stringify(data, null, 4))
  //         console.log(data)
  //
  //         nextUrl = data.nextURL
  //     });
  // })
  // .catch((err) => {
  //     console.log('Fetch Error :-S', err)
  // });

  let response = await Quizz.getFirstQuestion()
  let data = await response.json()

  updateContent(JSON.stringify(data, null, 4))
  console.log(response)
  console.log(data)
  nextUrl = data.nextURL
})

async function getFirstQuestion() {
  const url="https://courselab.lnu.se/question/1"
  const response = await fetch(url)
  let data

  if (!response.ok) {
      let data = await response.json()

      console.log(response)
      console.log(JSON.stringify(data, null, 4))

      throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response
};

*/
