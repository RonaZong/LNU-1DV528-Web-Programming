/**
 * A sample Node module exporting two functions.
 */
// export default {
//   doubleIt: (value) => value * 2,
//   squareIt: (value) => value * value
// }

export default {
  doubleIt,
  squareIt
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
