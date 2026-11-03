/**
 * A test program to show off async and await.
 */
const fs = require('fs')
const path = 'file.txt'

console.info('1) Program is starting up!')

const data = getFileContentCallback(path)
// const data = getFileContentSync(path);
console.info(data)

console.info('3) End of the program!')

/* eslint-disable no-unused-vars */

/**
 * Return the content of the file, using callback, which will not work
 * since the function will end before the callback is executed.
 *
 * @param {string} filename - The path to the file to read.
 */
function getFileContentCallback (filename) {
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      // deal with the error
    }
    return data
  })
}

/**
 * Return the content of the file, synced version which works.
 *
 * @param {string} filename - The path to the file to read.
 * @returns {string} The content of the file.
 */
function getFileContentSync (filename) {
  const data = fs.readFileSync(filename, 'utf-8')
  return data
}
