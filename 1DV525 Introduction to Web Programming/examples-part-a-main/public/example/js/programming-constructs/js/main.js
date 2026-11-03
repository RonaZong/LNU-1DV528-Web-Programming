/**
 * A comment.
 */

// import from modules
import { mc1, mf1, mf2 } from './module.mjs'

// Import dice class
import Dice from './Dice.mjs'

console.log('Hello world')

/**
 * A main function.
 * @returns {void}
 */
function main () {
  console.log('Hello world')
}

main()

// Define variables
const a = 1
const b = '1'
let c
const d = null

console.log(a) // 1
console.log(b) // '1'
console.log(c) // undefined
console.log(d) // null

// const can still change content
// of array/object type
// const a1 = 1
// a1 = 2      // error

const a2 = []
a2[0] = 1

// Array
const b1 = [1, '1', null]
b1[9] = []

console.log(b1.length) // 10
console.log(b1[0]) // 1
console.log(b1) // [1, '1', null, empty × 6, Array(0)]

delete b1[9]
console.log(b1) // [1, '1', null, empty × 7]
console.log(b1.length) // 10

// Object key/value container
const c1 = {}
const c2 = {
  key1: 'value1',
  key2: 'value2'
}

c1.key3 = 'value3'

console.log(c1) // {key3: 'value3'}
console.log(c2) // {key1: 'value1', key2: 'value2'}

// if
const condition = true

if (condition) {
  console.log('YES')
}

// if, else if, else
const condition1 = false
const condition2 = false

if (condition1) {
  console.log('NO')
} else if (!condition2) {
  console.log('YES')
} else {
  console.log('NO')
}

// switch
const sw = 'a'

switch (sw) {
  case 'a':
    console.log('YES')
    break

  case 'b':
  case 'c':
    console.log('NO')
    break

  default:
    console.log('NO')
}

// for loop
for (let i = 0; i < 9; i++) {
  console.log(i)
}

// while loop
let condition4 = 0

while (condition4 < 9) {
  condition4++
  console.log(condition4)
}

// loop array
const xs = [1, '1']

for (let i = 0; i < xs.length; i++) { console.log(xs[i]) }

xs.forEach((x, i) => console.log(x))

for (const x of xs) { console.log(x) }

// loop object
const p = {
  p1: 'value1',
  p2: 'value2',
  p3: 'value3'
}

for (const [key, value] of Object.entries(p)) {
  console.log(`${key}: ${value}`)
}

/**
 * Function with arguments.
 * @param {string} arg1 The argument one.
 * @param {string} arg2 The argument two.
 * @returns {void}
 */
function func1 (arg1, arg2) {
  console.log(arg1 + arg2)
}

func1('first', 'second') // firstsecond

/**
 * Function with default arguments.
 * @param {string} arg1 The argument one.
 * @param {string} arg2 The argument two.
 * @returns {void}
 */
function func2 (arg1, arg2 = 'SECOND') {
  console.log(arg1 + arg2)
}

func2() // undefinedSECOND
func2('first') // firstSECOND

// First class function
const f1 = function (a) {
  console.log(a)
}

f1('Hello') // Hello
console.log(f1) // Function

// Arrow function
const f2 = (a) => {
  console.log(a)
}

f2('Hello') // Hello
console.log(f2) // Function

// Self-invoking function
// (function (parameters) {
//   //body of the function
// })(arguments);
;(function () {
  let a = 1
  a += 2
  console.log(a)
})()

// Import from module
console.log(mc1) // c1
console.log(mf1()) // f1
console.log(mf2()) // f2

// Import and use class
const die = new Dice()

die.roll()

console.log(die.lastRoll())

// die.#last = 7  // Error on private field
