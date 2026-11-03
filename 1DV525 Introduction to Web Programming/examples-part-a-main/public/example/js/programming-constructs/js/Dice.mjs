/**
 * A module exporting a class.
 */
export default class Dice {

    #last

    constructor () {
      this.#last = null
    }

    roll () {
      this.#last = Math.floor(6*Math.random())+1
      return this.#last
    }

    lastRoll () {
      return this.#last
    }
}
