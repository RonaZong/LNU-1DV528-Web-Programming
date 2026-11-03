/**
 * Show off how to import and use a esm module.
 */
import MathModule from './MathModule.mjs'

let a = 1
let b = 2

console.log(`Initial values a=${a}, b=${b}`)

a = MathModule.doubleIt(a)
b = MathModule.squareIt(b)
console.log(`Modified values a=${a}, b=${b}`)

a = MathModule.doubleIt(a)
b = MathModule.squareIt(b)
console.log(`Modified values a=${a}, b=${b}`)
