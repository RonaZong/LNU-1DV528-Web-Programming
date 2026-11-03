/**
 * Module exporting functions for playing around with a set of dice.
 */

export { rollDice, diceAsString, diceAsValue }

// Store all dice values in an array
let dice = []

const diceEye = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']

/**
 * Roll some dice.
 * @param {number} numOfDice Number of dice to roll.
 */
function rollDice (numOfDice) {
  dice = []
  for (let i = 0; i < numOfDice; i++) {
    dice[i] = Math.floor(6 * Math.random()) + 1
  }
}

/**
 * Get rolled dices as string.
 * @returns {string} for all the dices.
 */
function diceAsString () {
  let result = ''
  for (const aDie of dice) {
    result += diceEye[aDie - 1]
  }
  return result
}

/**
 * Get rolled dices as value.
 * @returns {number} the sum of all dices.
 */
function diceAsValue () {
  const result = dice.reduce((a, b) => a + b, 0)
  return result
}
