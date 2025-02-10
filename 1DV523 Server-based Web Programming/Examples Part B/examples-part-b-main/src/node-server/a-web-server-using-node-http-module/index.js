/**
 * This example program shows how to build a basic web server using node.
 * Start it by:
 * node index
 *
 * Then open a web browser and connect to it using:
 * http://127.0.0.1:3000/
 */

// Require the http-module, it is available as part of the Node API
const http = require('http')

// Require the callbacks
const controller = require('./src/controller.js')

// Create an instance of the http server to handle HTTP requests
const app = http.createServer((req, res) => {
  // Use logger to output details on the request
  controller.logger(req)

  switch (req.url) {
    case '/hello.html':
      controller.hello(req, res)
      break

    case '/style.css':
      controller.style(req, res)
      break

    case '/favicon.ico':
      controller.favicon(req, res)
      break

    case '/json':
      controller.json(req, res)
      break

    default:
      controller.index(req, res)
  }
})

// Start the server on port 3000
app.listen(3000, '127.0.0.1')
console.log('Node server running on port 3000')
