/**
 * A dice with values from 1 to 6.
 */
export default class Dice {
  #last = null
  #graphical = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']

  /**
   * Roll the dice.
   * @returns {number} The dice rolled.
   */
  roll () {
    this.#last = Math.floor(Math.random() * 6 + 1)
    return this.#last
  }

  /**
   * Get the last rolled dice value.
   * @returns {number} The last rolled value.
   */
  value () {
    return this.#last
  }

  /**
   * Get a graphical representation of the dice.
   * @returns {string} The dice as a graphical representation.
   */
  graphical () {
    return this.#graphical[this.#last - 1]
  }
}
