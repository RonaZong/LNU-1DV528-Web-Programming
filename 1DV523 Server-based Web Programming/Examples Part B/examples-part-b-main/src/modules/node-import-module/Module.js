/**
 * A sample Node module exporting two functions.
 */
// module.exports = {
//   doubleIt: (value) => value * 2,
//   squareIt: (value) => value * value
// }

module.exports = {
  doubleIt: doubleIt,
  squareIt: squareIt
}

/**
 * Double the value.
 *
 * @param {number} val - The value to increment
 * @returns {number} Returns the incremented value.
 */
function doubleIt (val) {
  return val * 2
}

/**
 * Square the value.
 *
 * @param {number} val - The value to increment
 * @returns {number} Returns the incremented value.
 */
function squareIt (val) {
  return val * val
}
