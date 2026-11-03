/**
 * My first code.
 */

// A timer event

/**
 * Get the time as seconds.
 * @returns {number} Time as seconds.
 */
function timeAsSeconds () {
  return new Date().getTime() / 1000
}

const seconds = timeAsSeconds()

// A timeout to be called after 500 ms
setTimeout(() => {
  const when = timeAsSeconds() - seconds
  console.log(`Ran after ${when} seconds`)
}, 500)

// Blocking code
// while (true) {
//   if (timeAsSeconds() - seconds >= 2) {
//     console.log("Good, looped for 2 seconds");
//     break;
//   }
// }

// A button click event
const button = document.querySelector('#colorButton')
const body = document.querySelector('body')

button.addEventListener('click', () => {
  body.style.backgroundColor = '#0f0'
})

// More events on the button
// button.addEventListener('dblclick', () => {
//   body.style.backgroundColor = '#000'
// })

button.addEventListener('focus', () => {
  body.style.backgroundColor = '#f00'
})

button.addEventListener('mouseover', () => {
  body.style.backgroundColor = '#00f'
})

// Remove event handlers
/**
 * Change the color of the background.
 */
function changeBackgroundColor () {
  body.style.backgroundColor = '#fff'
}

button.addEventListener('dblclick', changeBackgroundColor)

button.removeEventListener('dblclick', changeBackgroundColor)

// Event objects
/**
 * Change the color of the button.
 * @param {Event} event As the event object.
 */
function changeButtonColor (event) {
  console.log(event)
  event.target.style.backgroundColor = '#c0c'
}

button.addEventListener('dblclick', changeButtonColor)

// Keyboard events
addEventListener('keypress', (event) => {
  console.log(event.key + ':' + event.code)
})

// Prevent the default event
const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
  console.log('The form is to be submitted')
  event.preventDefault()
})

// Event bubbling
const content = document.querySelector('#content')
const inner = document.querySelector('.inner')
const outer = document.querySelector('.outer')

content.addEventListener('click', (event) => {
  console.log(event)
  console.log(event.target, event.currentTarget)
  event.stopPropagation()
})

inner.addEventListener('click', (event) => {
  console.log(event.target, event.currentTarget)
})

outer.addEventListener('click', (event) => {
  console.log(event.target, event.currentTarget)
})

// Event capture
const html = document.querySelector('html')

html.addEventListener('click', (event) => {
  console.log(`You clicked ${event.currentTarget.tagName}`)
}, { capture: true })

// Event delegation
const container = document.querySelector('.container')

container.addEventListener('click', (event) => {
  event.target.style.backgroundColor = '#f0f'
})

// Timer
const meter = document.querySelector('meter')
const start = document.querySelector('#start')

start.addEventListener('click', (event) => {
  console.log('Starting the timer')
  fillTimedMeter(10 * 1000, 500)
})

/**
 * Implements a timer and fills up a meter element.
 * @param {number} duration For how long to fill up the timer.
 * @param {number} interval For the updates of the timer.
 */
function fillTimedMeter (duration, interval) {
  const startTime = new Date()

  const intervalId = setInterval(() => {
    const currentTime = new Date()

    meter.value = (currentTime - startTime) / duration * 100

    if (meter.value >= 100) {
      clearInterval(intervalId)
    }
  }, interval)
}

// Custom events
const winnerEvent = new Event('winner')

body.addEventListener('winner', (event) => {
  body.style.backgroundColor = '#090'
})

body.dispatchEvent(winnerEvent)
