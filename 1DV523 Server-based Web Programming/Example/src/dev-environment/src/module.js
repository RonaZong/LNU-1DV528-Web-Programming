/**
 * Just to show off a ESM module.
 */
export default {
  frontController: frontController
}

// Module to parse form data
const qs = require('querystring')

/**
 * Perform a request and response cycle.
 *
 * @param {object} req the HTTP request object
 * @param {object} res the HTTP response object
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
