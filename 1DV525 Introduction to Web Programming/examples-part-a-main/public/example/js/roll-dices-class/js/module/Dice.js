/**
 * A module exporting a class.
 */
const diceEye = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']

export default class Dice {
  #dice = []

  constructor () {
    this.#dice = []
  }

  roll (numOfDice) {
    this.#dice = []
    for (let i = 0; i < numOfDice; i++) {
      this.#dice[i] = Math.floor(6 * Math.random()) + 1
    }
  }

  toString () {
    let result = ''
    for (const aDie of this.#dice) {
      result += diceEye[aDie - 1]
    }
    return result
  }

  value () {
    let result = 0
    result = this.#dice.reduce((a, b) => a + b, 0)
    return result
  }
}
