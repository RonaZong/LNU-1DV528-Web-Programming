/**
 * A test program to show off async and await.
 */
const fs = require('fs')
const path = 'file.txt'

console.info('1) Program is starting up!')

fs.readFile(path, 'utf-8', (err, data) => {
  if (err) {
    // deal with the error
  }
  console.info(data)
})

console.info('3) End of the program!')
