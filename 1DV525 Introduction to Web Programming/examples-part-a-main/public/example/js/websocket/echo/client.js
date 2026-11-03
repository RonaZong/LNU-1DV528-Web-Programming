/**
 * To setup a websocket connection, and nothing more.
 */
(function () {
  let websocket
  const url = document.getElementById('connect_url')
  const connect = document.getElementById('connect')
  const sendMessage = document.getElementById('send_message')
  const message = document.getElementById('message')
  const close = document.getElementById('close')
  const output = document.getElementById('output')

  /**
   * Log output to web browser.
   * @param  {string} message to output in the browser window.
   * @returns {void}
   */
  function outputLog (message) {
    const now = new Date()
    const timestamp = now.toLocaleTimeString()

    output.innerHTML += `${timestamp} ${message}<br>`
    output.scrollTop = output.scrollHeight
  }

  /**
   * What to do when user clicks Connect.
   */
  connect.addEventListener('click', () => {
    console.log('Connecting to: ' + url.value)
    websocket = new WebSocket(url.value)

    // Handler for when the connection is opened
    websocket.onopen = () => {
      console.log('The websocket is now open.')
      console.log(websocket)
      outputLog('The websocket is now open.')
    }

    // Handler for when the message is received
    websocket.onmessage = (event) => {
      console.log('Receiving message: ' + event.data)
      console.log(event)
      console.log(websocket)
      outputLog('Server said: ' + event.data)
    }

    // Handler for when the socket is closed
    websocket.onclose = () => {
      console.log('The websocket is now closed.')
      console.log(websocket)
      outputLog('Websocket is now closed.')
    }
  })

  /**
   * What to do when user clicks to send a message.
   */
  sendMessage.addEventListener('click', () => {
    const messageText = message.value

    if (!websocket || websocket.readyState === 3) {
      console.log('The websocket is not connected to a server.')
    } else {
      websocket.send(messageText)
      console.log('Sending message: ' + messageText)
      outputLog('You said: ' + messageText)
    }
  })

  /**
   * What to do when user clicks Close connection.
   */
  close.addEventListener('click', () => {
    console.log('Closing websocket.')
    websocket.send('Client closing connection by intention.')
    websocket.close()
    console.log(websocket)
    outputLog('Prepare to close websocket.')
  })
})()
