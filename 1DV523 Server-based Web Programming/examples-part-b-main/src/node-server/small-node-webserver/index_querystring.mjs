/**
 * This example program shows how to start up a very small node.js server
 * listening to a specific port.
 * Start it by:
 * node index
 *
 * Then open a web browser and connect to it using:
 * http://127.0.0.1:3000/
 */

// Require the http-module, it is available as part of the Node API
//const http = require('http')
import http from 'http'

// To parse the querystring from the url
//const url = require('url')
import url from 'url'

// Create an instance of the http server to handle HTTP requests
const app = http.createServer((req, res) => {
  // Get some details from the request
  const aUrl = req.url
  const aMethod = req.method

  // console.log(req)
  console.log(`Got request on url '${aUrl}' using method '${aMethod}'`)

  // Check if querystring is attached
  const queryString = url.parse(aUrl, true).query
  if (!objectIsEmpty(queryString)) {
    console.log(` Query string: ${JSON.stringify(queryString, null, 4)}`)
  }

  // Set a response type of plain text for the response
  res.writeHead(200, { 'Content-Type': 'text/plain' })

  // Send back a response and end the connection
  const hasQueryString = objectIsEmpty(queryString)
    ? ''
    : ` with querystr: ${JSON.stringify(queryString)}`
  res.end(`Hello World! (${aUrl}${hasQueryString})\n`)
})

// Start the server on port 3000
app.listen(3000, '127.0.0.1')
console.log('Node server running on port 3000')

/**
 * @param obj
 */
function objectIsEmpty (obj) {
  return Object.keys(obj).length === 0
}
