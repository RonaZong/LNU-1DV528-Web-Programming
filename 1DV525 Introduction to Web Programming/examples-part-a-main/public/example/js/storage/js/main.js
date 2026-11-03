/**
 * This is some basics in JavaScript.
 */

// window.onload = main;
window.addEventListener('load', main)

/**
 * The main function.
 * @returns {undefined} Nothing.
 */
function main () {
  'use strict'

  const sendButton = document.getElementById('send')
  const messageInput = document.getElementById('message')
  const clearButton = document.getElementById('clear')
  const localOutput = document.getElementById('local')
  const sessionOutput = document.getElementById('session')
  const localStorage = window.localStorage
  const sessionStorage = window.sessionStorage

  /**
   * Clear the local and session storage.
   */
  function clearStorage () {
    console.log('CLEAR STORAGE')
    localStorage.clear()
    sessionStorage.clear()
  }

  // clearStorage()

  /**
   * Init the local and session storage.
   */
  function initStorage () {
    const localLog = localStorage.getItem('messageLog')
    const sessionLog = sessionStorage.getItem('messageLog')

    console.log('INIT STORAGE')

    if (localLog === null) {
      console.log('INIT LOCAL STORAGE')
      localStorage.setItem('messageLog', JSON.stringify([]))
    }

    if (sessionLog === null) {
      console.log('INIT SESSION STORAGE')
      sessionStorage.setItem('messageLog', JSON.stringify([]))
    }

    outputStorage()
  }

  initStorage()

  /**
   * Print out the storage to the console.
   */
  function outputStorage () {
    console.log('localStorage')
    console.log(localStorage)
    console.log('sessionStorage')
    console.log(sessionStorage)
  }

  outputStorage()

  /**
   * Print out the local storage to the console.
   */
  function outputLocalStorage () {
    const messages = JSON.parse(localStorage.getItem('messageLog'))
    let html = ''

    for (let i = 0; i < messages.length; i++) {
      const message = messages[i]
      const date = new Date(message.ts)

      html += `${date.toJSON()} - ${message.data}\n<br>`
    }

    localOutput.innerHTML = html

    console.log('OUTPUT to Local Storage')
  }

  outputLocalStorage()

  /**
   * Print out the session storage to the console.
   */
  function outputSessionStorage () {
    const messages = JSON.parse(sessionStorage.getItem('messageLog'))
    let html = ''

    for (let i = 0; i < messages.length; i++) {
      const message = messages[i]
      const date = new Date(message.ts)

      html += `${date.toJSON()} - ${message.data}\n<br>`
    }

    sessionOutput.innerHTML = html

    console.log('OUTPUT to Session Storage')
  }

  outputSessionStorage()

  sendButton.addEventListener('click', () => {
    const message = {
      ts: Date.now(),
      data: messageInput.value
    }
    let localLog = localStorage.getItem('messageLog')
    let sessionLog = sessionStorage.getItem('messageLog')

    localLog = JSON.parse(localLog)
    sessionLog = JSON.parse(sessionLog)

    localLog.push(message)
    sessionLog.push(message)

    localStorage.setItem('messageLog', JSON.stringify(localLog))
    sessionStorage.setItem('messageLog', JSON.stringify(sessionLog))

    outputStorage()
    outputLocalStorage()
    outputSessionStorage()
  })

  clearButton.addEventListener('click', () => {
    clearStorage()
    initStorage()
    outputLocalStorage()
    outputSessionStorage()
  })

  window.addEventListener('storage', () => {
    console.log('Local storage event received')
    outputStorage()
    outputLocalStorage()
    outputSessionStorage()
  })
}
