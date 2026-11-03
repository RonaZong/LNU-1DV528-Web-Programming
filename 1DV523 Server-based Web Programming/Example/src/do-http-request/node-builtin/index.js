/**
 * This example performs a HTTP request using node builtin libraries.
 */
const http = require('http')
// const http = require('https');

// Get the url as an argument
const args = process.argv.slice(2)
console.log(args)
if (args.length !== 1) {
  console.log('Usage: node index <url>')
  process.exit(1)
}

// Do a request
const url = args[0]
http.get(url, (res) => {
  let data = ''

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk
  })

  // The whole response has been received. Print out the result.
  res.on('end', () => {
    console.log('\n### HTTP Status code')
    console.log(res.statusCode + ' ' + res.statusMessage)

    console.log('\n### HTTP Response Headers')
    console.log(res.headers)

    console.log('\n### HTTP Response Body')
    console.log(data)
  })
}).on('error', (err) => {
  console.log('Error: ' + err.message)
})
