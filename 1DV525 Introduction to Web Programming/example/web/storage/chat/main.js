/**
 * This is some basics in JavaScript.
 */

// window.onload = main;
window.addEventListener('load', main)

/**
 * The main function.
 *
 * @returns {undefined} Nothing.
 */
function main () {
  'use strict'

  let sendButton = document.getElementById("send")
  let messageInput = document.getElementById("message")
  let clearButton = document.getElementById("clear")
  let localOutput = document.getElementById("local")
  let sessionOutput = document.getElementById("session")
  let localStorage = window.localStorage;
  let sessionStorage = window.sessionStorage;

  function clearStorage() {
    console.log("CLEAR STORAGE")
    localStorage.clear()
    sessionStorage.clear()
  }

  //clearStorage()



  function initStorage() {
    let localLog = localStorage.getItem("messageLog")
    let sessionLog = sessionStorage.getItem("messageLog")

    console.log("INIT STORAGE")

    if (localLog === null) {
        console.log("INIT LOCAL STORAGE")
        localStorage.setItem("messageLog", JSON.stringify([]))
    }

    if (sessionLog === null) {
        console.log("INIT SESSION STORAGE")
        sessionStorage.setItem("messageLog", JSON.stringify([]))
    }

    outputStorage()
  }

  initStorage()



  function outputStorage() {
    console.log("localStorage")
    console.log(localStorage)
    console.log("sessionStorage")
    console.log(sessionStorage)
  }

  outputStorage()



  function outputLocalStorage() {
    let messages = JSON.parse(localStorage.getItem("messageLog"))
    let html = "";

    for (let i = 0; i < messages.length; i++) {
        let message = messages[i]
        let date = new Date(message.ts)

        html += `${date.toJSON()} - ${message.data}\n<br>`
    }

    localOutput.innerHTML = html

    console.log("OUTPUT to Local Storage")
  }

  outputLocalStorage()



  function outputSessionStorage() {
    let messages = JSON.parse(sessionStorage.getItem("messageLog"))
    let html = "";

    for (let i = 0; i < messages.length; i++) {
        let message = messages[i]
        let date = new Date(message.ts)

        html += `${date.toJSON()} - ${message.data}\n<br>`
    }

    sessionOutput.innerHTML = html

    console.log("OUTPUT to Session Storage")
  }

  outputSessionStorage()



  sendButton.addEventListener("click", () => {
    let message = {
        ts: Date.now(),
        data: messageInput.value
    }
    let localLog = localStorage.getItem("messageLog")
    let sessionLog = sessionStorage.getItem("messageLog")

    localLog = JSON.parse(localLog)
    sessionLog = JSON.parse(sessionLog)

    localLog.push(message)
    sessionLog.push(message)

    localStorage.setItem("messageLog", JSON.stringify(localLog))
    sessionStorage.setItem("messageLog", JSON.stringify(sessionLog))

    outputStorage()
    outputLocalStorage()
    outputSessionStorage()
  })



  clearButton.addEventListener("click", () => {
    clearStorage()
    initStorage()
    outputLocalStorage()
    outputSessionStorage()
  })



  window.addEventListener('storage', () => {
    console.log("Local storage event received");
    outputStorage()
    outputLocalStorage()
    outputSessionStorage()
  });
}
