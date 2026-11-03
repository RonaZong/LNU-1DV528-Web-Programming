/**
 * A sample controller with endpoints, created as a Node module.
 */
const fs = require('fs/promises')
const path = require('path')

module.exports = {
  /**
   * @param req
   */
  logger: (req) => {
    // Get some details from the request
    const url = req.url
    const method = req.method

    // console.log(req)
    console.log(`Got request on url '${url}' using method '${method}'`)
  },

  /**
   * @param req
   * @param res
   */
  index: (req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, { 'Content-Type': 'text/plain' })

    // Send back a response and end the connection
    res.end('Hello World!\n\nUse the link /hello.html to get an actual web page displayed, or /json to get some JSON data.\n')
  },

  /**
   * @param req
   * @param res
   */
  json: (req, res) => {
    const data = {
      message: 'This is a JSON message.',
      list: ['item 1', 'item 2']
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(data, null, 2))
  },

  /**
   * @param req
   * @param res
   */
  hello: async (req, res) => {
    const file = path.join(__dirname, '/../public/hello.html')
    const content = await fs.readFile(file)

    res.setHeader('Content-Type', 'text/html')
    res.writeHead(200)
    res.end(content)
  },

  /**
   * @param req
   * @param res
   */
  style: async (req, res) => {
    const file = path.join(__dirname, '/../public/style.css')
    const content = await fs.readFile(file)

    res.setHeader('Content-Type', 'text/css')
    res.writeHead(200)
    res.end(content)
  },

  /**
   * @param req
   * @param res
   */
  favicon: async (req, res) => {
    const file = path.join(__dirname, '/../public/favicon.ico')
    const content = await fs.readFile(file)

    res.setHeader('Content-Type', 'image/x-icon')
    res.writeHead(200)
    res.end(content)
  }
}
