/**
 * My first code.
 */
'use strict'

console.log('Hello world')

/**
 * Find the h1 element and update its innerHTML.
 */
const h1Collection = document.getElementsByTagName('h1')
const firstH1 = h1Collection.item(0)
firstH1.innerHTML = 'Hello World From JavaScript'

/**
 * Update the DOM tree by adding a paragraph.
 */
// Get the pointer into the DOM
// const h1CollectionAgain = document.getElementsByTagName('h1')
// const firstH1Again = h1Collection.item(0);

// Create the new element
const newPara = document.createElement('p')
newPara.innerHTML = 'Hello world in a newly added paragraph.'

// Insert the new element right after
// firstH1Again.insertAdjacentElement('afterend', newPara)
firstH1.insertAdjacentElement('afterend', newPara)

// /**
//  * Listen to events
//  */
// document.addEventListener('DOMContentLoaded', (event) => {
//   console.log(event)
// })

/**
 * Log the event to the console.
 * @param {object} event The event occuring.
 */
function logger (event) {
  console.log(event)
}

document.addEventListener('DOMContentLoaded', logger)

/**
 * Randomly change the color when the button is clicked.
 */
const button = document.getElementById('colorButton')
button.addEventListener('click', changeBackgroundColor)

// /**
//  * Change the background color of the body.
//  */
// function changeBackgroundColor () {
//   console.log('I was clicked!')
// }

/**
 * Change the background color of the body.
 */
function changeBackgroundColor () {
  // Get the body element
  const bodyElements = document.getElementsByTagName('body')
  const body = bodyElements.item(0)

  // Randomize a color
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  console.log('Color: ' + randomColor)

  // Use the style attribute to set the background color
  body.style.backgroundColor = `#${randomColor}`
}
