/**
 * A sample of a main function stating the famous Hello World.
 */
const myMathModule = require('./module.js')

let a = 1
let b = 2

console.log(`Initial values a=${a}, b=${b}`)

a = myMathModule.doubleIt(a)
b = myMathModule.squareIt(b)
console.log(`Modified values a=${a}, b=${b}`)

a = myMathModule.doubleIt(a)
b = myMathModule.squareIt(b)
console.log(`Modified values a=${a}, b=${b}`)
