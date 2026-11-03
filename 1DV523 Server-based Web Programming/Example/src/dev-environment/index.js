/**
 * Show how to work with the body from a HTTP request.
 */

// Require the http-module, it is available as part of the Node API
// Import the frontController handling the request-response
import frontController from './module.js'

const http = require('http')

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
