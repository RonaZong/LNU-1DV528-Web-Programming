/**
 * This example performs a HTTP request using the module node-fetch.
 */
import fetch from 'node-fetch'

// Get the url as an argument
const args = process.argv.slice(2)
console.log(args)
if (args.length !== 1) {
  console.log('Usage: node index <url>')
  process.exit(1)
}
const url = args[0]

await doRequest(url)

/**
 * Do a HTTP request.
 *
 * @param url
 */
async function doRequest (url) {
  try {
    const res = await fetch(url)
    const body = await res.text()

    console.log('\n### HTTP Status code')
    console.log(res.status + ' ' + res.statusText)

    console.log('\n### HTTP Response Headers')
    console.log(res.headers.raw())

    console.log('\n### HTTP Response Body')
    console.log(body)

  } catch (error) {
    console.log(error.response.body)
  }
}
