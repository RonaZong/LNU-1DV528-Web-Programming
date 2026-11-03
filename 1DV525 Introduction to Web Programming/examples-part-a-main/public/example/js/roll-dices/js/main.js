/**
 * My first code.
 */
'use strict'

// Attach the event handlers to the button
const button = document.getElementById('rollButton')
button.addEventListener('click', rollDices)

/**
 * Roll and get a dice.
 * @returns {string} With string representation of the dice.
 */
function rollDice () {
  const randomDice = Math.floor(6 * Math.random()) + 1
  const dices = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']

  return dices[randomDice - 1]
}

/**
 * Roll the dices.
 * @returns {void}
 */
function rollDices () {
  // Get the output element
  const output = document.getElementById('output')
  let diceStr = ''

  for (let i = 1; i <= 5; i++) {
    diceStr += rollDice()
  }

  output.innerHTML = diceStr
}
