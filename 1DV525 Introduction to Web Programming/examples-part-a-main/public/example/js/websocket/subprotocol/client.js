/**
 * To setup a websocket connection, and nothing more.
 */
(function () {
  'use strict'

  let websocket
  const url = document.getElementById('connect_url')
  const connect = document.getElementById('connect')
  const protocol = document.getElementById('protocol')
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
   * Select what subprotocol to use for websocekt connection.
   * @returns {string} With name of subprotocol.
   */
  function setSubProtocol () {
    return protocol.value
  }

  /**
   * What to do when user clicks Connect.
   */
  connect.addEventListener('click', function (/* event */) {
    console.log('Connecting to: ' + url.value)
    if (!protocol.value) {
      websocket = new WebSocket(url.value)
    } else {
      websocket = new WebSocket(url.value, setSubProtocol())
    }

    websocket.onopen = function () {
      console.log("The websocket is now open using '" + websocket.protocol + "'.")
      console.log(websocket)
      outputLog("The websocket is now open using '" + websocket.protocol + "'.")
    }

    websocket.onmessage = function (event) {
      console.log('Receiving message: ' + event.data)
      console.log(event)
      console.log(websocket)
      outputLog('Server said: ' + event.data)
    }

    websocket.onclose = function () {
      console.log('The websocket is now closed.')
      console.log(websocket)
      outputLog('Websocket is now closed.')
    }
  }, false)

  /**
   * What to do when user clicks to send a message.
   */
  sendMessage.addEventListener('click', function (/* event */) {
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
  close.addEventListener('click', function (/* event */) {
    console.log('Closing websocket.')
    websocket.send('Client closing connection by intention.')
    websocket.close()
    console.log(websocket)
    outputLog('Prepare to close websocket.')
  })
})()
