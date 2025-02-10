/**
 * Show how to work with the body from a HTTP request.
 */

// Require the http-module, it is available as part of the Node API
//const http = require('http')
import http from 'http'

// Module to parse multipart/form-data
//const qs = require('querystring')
import qs from 'querystring'

// Create an instance of the http server to handle HTTP requests
const app = http.createServer((req, res) => {
  let rawBody = ''

  req.on('data', (data) => {
    rawBody += data
  })

  req.on('end', () => {
    req.rawBody = rawBody
    frontController(req, res)
  })
})

// Start the server on port 3000
app.listen(3000, '127.0.0.1')
console.log('Node server running on port 3000')

/**
 * Perform a request and response cycle.
 *
 * @param req
 * @param res
 */
function frontController (req, res) {
  // Get some details from the request
  const aUrl = req.url
  const aMethod = req.method

  // console.log(req)
  console.log(`Got request on url '${aUrl}' using method '${aMethod}'`)

  // Show the headers
  console.log(`\nHeader (${typeof req.headers})`)
  console.log('"""')
  console.log(JSON.stringify(req.headers, null, 2))
  console.log('"""')

  // Show the body
  console.log(`\nBody (${typeof req.rawBody})`)
  console.log('"""')
  console.log(req.rawBody)
  console.log('"""')

  // Check the content type
  let contentType = req.headers['content-type']
  if (contentType) {
    contentType = contentType.split(';')
  }

  if (contentType && contentType[0] === 'application/json') {
    const jsonBody = JSON.parse(req.rawBody)
    console.log(`\nJSON parsing body (${typeof jsonBody}):`)
    console.log('"""')
    console.log(JSON.parse(req.rawBody, null, 2))
    console.log('"""')
  } else {
    console.log(`\nUnknown content type: ${contentType}`)
    const formBody = qs.parse(req.rawBody)
    console.log(`\nForm data parsing body (${typeof formBody}):`)
    console.log('"""')
    console.log(formBody)
    console.log('"""')
  }

  // Set a response type of plain text for the response
  res.writeHead(200, { 'Content-Type': 'text/plain' })

  // Send back a response and end the connection
  res.end(`Hello World! (${aUrl})\n`)
}
