export default class Dice {
  #last = null
  #graphical = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']

  roll () {
    this.#last = Math.floor(Math.random() * 6 + 1)
    return this.#last
  }

  last () {
    return this.#last
  }

  graphical () {
    return this.#graphical[this.#last - 1]
  }
}
