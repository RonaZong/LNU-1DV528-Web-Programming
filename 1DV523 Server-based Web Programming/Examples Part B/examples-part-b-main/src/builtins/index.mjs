/**
 * Work with JavaScript builtin objects in Node.
 */
let dice = Math.round(Math.random() * 6 + 1)
console.log(`The dice is ${dice}`)

let date = new Date()
console.log(date)

let object = {
    key1: 'Value 1',
    key2: 42
}
console.log(JSON.stringify(object, null, 2))
