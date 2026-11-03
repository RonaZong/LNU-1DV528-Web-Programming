/**
 * Example to throw some dice.
 */
'use strict'

// import Demo class
import Demo from './module/Demo.js'

// import from the dice module
import Dice from './module/Dice.js'

const demo = new Demo()

const dice = new Dice()

// Attach event handler to increment button
const incrementButton = document.getElementById('incrementButton')

incrementButton.addEventListener('click', () => {
  const output = document.getElementById('increment')
  console.log('Increment button was clicked!')
  demo.increment()
  output.innerHTML = demo.sum
})

// Attach the event handlers to the dice button
const button = document.getElementById('rollButton')
button.addEventListener('click', () => {
  console.log('Dice button was clicked!')
  dice.roll(5)
  const output = document.getElementById('output')
  output.innerHTML = dice.toString() + dice.value()
})
