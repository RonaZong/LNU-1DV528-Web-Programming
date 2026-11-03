/**
 * A module for a dice.
 */
module.exports = class Dice {
  /**
   * Initiating the class members.
   *
   * @class
   */
  constructor () {
    this.dice = null
  }

  /**
   * Roll the dice and remember the value of the rolled dice.
   *
   * @param {number} faces The number of faces of the dice, defaults to 6.
   *
   * @returns {number} The value of the rolled dice min=1 and max=faces.
   */
  roll (faces = 6) {
    this.dice = Math.floor(Math.random() * faces + 1)
    return this.dice
  }

  /**
   * Get the value of the last rolled dice.
   *
   * @returns {number} The value of the last rolled dice.
   */
  lastRoll () {
    return this.dice
  }

  /**
   * When someone is printing this object, what should it look like?
   *
   * @returns {string} The value of the last rolled dice.
   */
  toString () {
    return this.dice
  }
}
