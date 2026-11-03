/**
 * Show off how input and output works.
 */
import * as readline from 'node:readline/promises';
import { exit, stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

// Input
const name = await rl.question('What is your name? ');
console.log(name)

// Output
const msg = 'Hello world'
console.log(msg + ' ' + name)

// Exit
exit()
