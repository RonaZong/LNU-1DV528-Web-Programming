import Dice from './Dice.js'

export default class Player {
  #sum = 0
  #rolls = ''
  #dice = new Dice()

  roll () {
    if (this.#sum > 21) {
      return
    }

    this.#sum += this.#dice.roll()
    this.#rolls += this.#dice.graphical()
    return this.#sum
  }

  score () {
    return this.#sum
  }

  sum () {
    return `Sum = ${this.#sum}`
  }

  rolls () {
    return this.#rolls
  }

  reset () {
    this.#sum = 0
    this.#rolls = ''
    this.#dice = new Dice()
  }
}
