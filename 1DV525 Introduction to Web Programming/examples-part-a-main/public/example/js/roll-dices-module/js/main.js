/**
 * Example to throw some dice.
 */
'use strict'

// import from the demo module
import { sum, increment } from './module/demo.js'

// import from the dice module
import { rollDice, diceAsString, diceAsValue } from './module/dice.js'

// Attach event handler to increment button
const incrementButton = document.getElementById('incrementButton')

incrementButton.addEventListener('click', () => {
  const output = document.getElementById('increment')
  console.log('Increment button was clicked!')
  increment()
  output.innerHTML = sum
})

// Attach the event handlers to the dice button
const button = document.getElementById('rollButton')
button.addEventListener('click', () => {
  console.log('Dice button was clicked!')
  rollDice(5)
  const output = document.getElementById('output')
  output.innerHTML = diceAsString() + diceAsValue()
})
