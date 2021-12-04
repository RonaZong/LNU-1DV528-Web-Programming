/**
 * Add a main and include additional files.
 */

// window.onload = main;
window.addEventListener('load', main)

/**
 * The main function.
 *
 * @returns {undefined} Nothing.
 */
function main () {
  'use strict'

  let sum
  const a = 20
  const b = 22

  console.log('This is the main function')

  sum = add(a, b)
  console.log('The sum is = ' + sum)
}
