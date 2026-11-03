/**
 * A sample of a main function stating the famous Hello World.
 */
const MathModule = require('./Module.js')

let a = 1
let b = 2

console.log(`Initial values a=${a}, b=${b}`)

a = MathModule.doubleIt(a)
b = MathModule.squareIt(b)
console.log(`Modified values a=${a}, b=${b}`)

a = MathModule.doubleIt(a)
b = MathModule.squareIt(b)
console.log(`Modified values a=${a}, b=${b}`)
