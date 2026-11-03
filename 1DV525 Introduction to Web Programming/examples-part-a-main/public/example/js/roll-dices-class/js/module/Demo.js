/**
 * A class in JavaScript.
 */
export default class Demo {
  #sum

  constructor () {
    this.#sum = 0
  }

  increment () {
    this.#sum += 1
  }

  get sum () {
    return this.#sum
  }
}
