console.log('Ready in main.js')

const message = document.getElementById('message')
const send = document.getElementById('send')
const output = document.getElementById('output')

send.addEventListener('click', (ev) => {
  console.log('Clicked send')
  const messageText = message.value

  if (!websocket || websocket.readyState === 3) {
    outputLog('The websocket is not connected to a server.')
  } else {
    websocket.send(messageText)
    outputLog('You said: ' + messageText)
  }
})

/**
 * Output data to the client gui.
 *
 * @param {string} data the deatils to print out
 */
function outputLog (data) {
  const now = new Date()
  const timestamp = now.toLocaleTimeString()

  output.textContent += `${timestamp} ${data}\n`
  output.scrollTop = output.scrollHeight
}

/**
 * Structure for the websocket client
 */
const url = 'ws://localhost:3000'
const websocket = new WebSocket(url)

console.log(`Connecting to: ${url}`)

websocket.onopen = () => {
  outputLog('The websocket is now open.')
}

websocket.onmessage = async (event) => {
  const text = await new Response(event.data).text()
  outputLog(`Server said: ${text}`)
}

websocket.onclose = () => {
  outputLog('Websocket is now closed.')
}
