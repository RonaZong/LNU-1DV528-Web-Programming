/**
 * A module for game Guess the number I'm thinking of.
 */
export default class Game {
  #thinking = -1

  /**
   * Init the object, not reaaly needed here.
   */
  constructor () {
    this.#thinking = -1
  }

  /**
   * Init the game and guess the number.
   */
  init () {
    this.#thinking = Math.round(Math.random() * 100 + 1)
  }

  /**
   * Check if the guess is correct or not.
   *
   * @param {number} guess The number being guessed.
   *
   * @returns {boolean} True if guess matches thinking, else false.
   */
  check (guess) {
    return guess === this.#thinking
  }

  /**
   * Return a string stating the correct number is "higher" or "lower"
   * than the current guess.
   *
   * @param {number} guess The number being guessed.
   *
   * @returns {string} "higher" or "lower".
   */
  compare (guess) {
    return guess > this.#thinking
      ? 'lower'
      : 'higher'
  }

  /**
   * Return the number Im thinking of.
   *
   * @returns {number} as current number.
   */
  cheat () {
    return this.#thinking
  }
}
