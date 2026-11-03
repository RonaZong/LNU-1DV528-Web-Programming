import Dice from './Dice.js'

/**
 * A player class for a dice game.
 */
export default class Player {
  #sum = 0
  #rolls = ''
  #dice = new Dice()

  /**
   * Roll the dice.
   */
  roll () {
    if (this.#sum > 21) {
      return
    }

    this.#sum += this.#dice.roll()
    this.#rolls += this.#dice.graphical()
  }

  /**
   * Get the total player score.
   * @returns {number} The current player score.
   */
  score () {
    return this.#sum
  }

  /**
   * The current player score as a string.
   * @returns {string} The current player score.
   */
  sum () {
    return `Sum: ${this.#sum}`
  }

  /**
   * Return all rolls made.
   * @returns {string} All the rolls made.
   */
  rolls () {
    return this.#rolls
  }

  /**
   * Reset the game and start from scratch.
   */
  reset () {
    this.#sum = 0
    this.#rolls = ''
  }
}
