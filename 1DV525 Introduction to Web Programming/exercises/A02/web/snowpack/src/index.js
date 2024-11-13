/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import myModule from './modules/a.js'
import Person from './modules/b.js'
import Employee from './modules/c.js'
import confetti from 'canvas-confetti';

confetti.create(document.getElementById('canvas'), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });


console.log("MOPED")

/**
 * Some function to show off how it works.
 *
 * @param {number} x A number to add.
 * @param {number} y Another number to add.
 * @returns {number} The sum of the parameters.
 */
function alpha (x, y) {
  return x + y
}

console.log(alpha(40, 2))
console.log(alpha(40, 2))


console.log(myModule)
console.log(myModule.sayHi(myModule.name))
console.log(myModule.sayHi("Donald Duck"))

let tarzan = new Person("Tarzan")
let jane = new Person("Jane")

console.log(Person)
console.log(tarzan)
console.log(jane)
console.log("Counter = " + tarzan.getCounter)

console.log(`'Hi!' said '${tarzan.describe()}' when he met '${jane.describe()}'.`)

console.log(`'${tarzan.describe()}' has a name '${tarzan.name}'.`)
console.log(`'${jane.describe()}' has a name '${jane.name}'.`)

console.log(`'${tarzan.describe()}' has a name '${tarzan.getName}'.`)
console.log(`'${jane.describe()}' has a name '${jane.getName}'.`)

console.log("Counter = " + tarzan.getCounter)

let john = new Employee("John", "Train company")

console.log(Employee)
console.log(john)
console.log(john.describe())
