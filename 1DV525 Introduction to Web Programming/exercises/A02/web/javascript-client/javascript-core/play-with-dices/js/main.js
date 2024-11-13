/**
 * A function to wrap it all in.
 */
window.addEventListener('load', function () {
  'use strict'

  console.log('All ready.')

  const a = 1

  for (let i = 0; i < 6; i++) {
    const a = 2
    console.log(i, a)
  }

  console.log(`The variable a has the value ${a}.`)

  let i = 4
  do {
    --i
    console.log(i)
  } while (i)

  i = 5
  while (i) {
    --i
    console.log(i)
  }

  /**
   * Trying out creating a function.
   *
   * @param {string} str to convert to uppercase.
   * @returns {string} string upper case.
   */
  function toUpper (str) {
    return str.toUpperCase()
  }

  const str = 'Mikael plays around'
  console.log(toUpper(str))
  console.log(str.toUpperCase())

  const res = 42 * 7 + 19.99 / Math.PI
  console.log(res)
  console.log(Math.round(res))

  /**
   * Return a random value.
   *
   * @param {number} max random value to return.
   * @returns {number} as random number.
   */
  function rand (max) {
    return Math.floor(Math.random() * max + 1)
  }

  console.log('DICE')
  let dice
  while (dice !== 6) {
    dice = rand(6)
    console.log(dice)
  }

  const diceHand = []
  for (i = 0; i < 5; i++) {
    diceHand[i] = rand(6)
  }
  console.log('DiceHand is:')
  console.log(diceHand.join(', '))

  /**
   * Print a representation fo the dice.
   *
   * @param {number} value of the dice.
   * @returns {string} to print as dice value.
   */
  function printDice (value) {
    const printDice = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']
    return printDice[value - 1]
  }

  diceHand.forEach(element => console.log(printDice(element)))
  console.log(diceHand)

  const diceElement = document.getElementById('dice')
  // const html = `
  //   <ul class="dice">
  //   <li>${printDice(diceHand[0])}
  //   <li>${printDice(diceHand[1])}
  //   <li>${printDice(diceHand[2])}
  //   <li>${printDice(diceHand[3])}
  //   <li>${printDice(diceHand[4])}
  //   </ul>
  //   `
  // diceElement.innerHTML = html

  // const numberOfDicesToRoll = 6
  const button = document.getElementById('rollTheDice')
  button.addEventListener('click', (event) => {
    const numOfDices = document.getElementById('numberOfDices')

    // diceElement.innerHTML = rollTheDices(numberOfDicesToRoll)
    diceElement.innerHTML = rollTheDices(parseInt(numOfDices.value.parseInt()))

    event.preventDefault()
  })

  /**
   * Roll a number of dices.
   *
   * @param {number} numDices the number of dices to roll.
   * @returns {string} to print as HTML.
   */
  function rollTheDices (numDices) {
    let html = '<ul class="dice">'

    for (let i = 1; i <= numDices; i++) {
      dice = rand(6)
      html += `<li>${printDice(dice)}</li>`
    }

    html += '</ul>'
    return html
  }
})

// 'use strict'
//
// console.log('All ready.')
//
// window.addEventListener('load', main)
//
// /**
//  * The main function.
//  *
//  * @returns {undefined} nothing.
//  */
// function main () {
//   'use strict'
//
//   console.log('All ready (main).')
// }
//
// window.addEventListener('load', function () {
//     "use strict";
//
//     console.log("All ready.");
// })
