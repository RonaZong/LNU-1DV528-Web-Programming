/**
 * A test program to show off async and await.
 */
const fs = require('fs')
const path = 'file.txt'

console.info('1) Program is starting up!')

const data = fs.readFileSync(path, 'utf-8')
console.info(data)

console.info('3) End of the program!')
