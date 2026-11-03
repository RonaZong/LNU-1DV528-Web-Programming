/**
 * To setup a websocket connection, and nothing more.
 */
(function () {
  // Get the elements needed
  const url = document.getElementById('url')
  const connect = document.getElementById('connect')

  // Prepare the websocket variable
  let websocket

  // Create the websocket to connect to the url
  connect.addEventListener('click', () => {
    console.log('Connecting to: ' + url.value)
    websocket = new WebSocket(url.value)

    // Add event handler for when the websocket has connected
    websocket.onopen = () => {
      console.log('The websocket is now open.')
    }
  })
})()
