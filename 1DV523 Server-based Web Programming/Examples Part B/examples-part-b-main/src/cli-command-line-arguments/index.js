/**
 * Show how to take care of the incoming arguments.
 */

console.log(process.argv)

const myArgs = process.argv.slice(2)
const numArgs = process.argv.length - 2

console.log(`myArgs (${numArgs}): `, myArgs)

if (myArgs[0] === 'insult' && numArgs === 2) {
  console.log(myArgs[1], 'looks quite ugly.')
} else if (myArgs[0] === 'compliment' && numArgs === 2) {
  console.log(myArgs[1], 'is really cool.')
} else {
    console.log('Sorry, that is not something I know how to do.')
}
