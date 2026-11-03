/**
 * Showing of a menu driven program, this module is for the menu.
 */
import Game from './Game.mjs'

// Set up readline
import * as readline from 'node:readline/promises';
import { exit, stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

export default {
    run: run
}

const game = new Game()
game.init()


/**
 * Run the program and show the prompt and wait for input.
 */
function run () {
    rl.setPrompt('Guess my number (menu for the menu): ')
    rl.prompt()
  
    rl.on('close', process.exit)
    rl.on('line', router)
}

/**
 * Process a incoming line and select an action, like a router selectin an
 * action based on the incoming event/line/input.
 */
function router (line) {
    line = line.trim()
    switch (line) {
        case 'quit':
        case 'exit':
            /* eslint no-unreachable: "off" */
            process.exit()
            break
        case 'help':
        case 'menu':
            showMenu()
            break
        case 'init':
            makeInit(game)
            break
        case 'cheat':
            makeCheat(game)
            break
        default:
            makeGuess(game, line)
    }
    rl.prompt()
}



/**
 * Show the menu on that can be done.
 *
 * @returns {void}
 */
function showMenu () {
    console.info(
        ' You can choose from the following commands.\n' +
            '  exit, quit, ctrl-d - to exit the program.\n' +
            '  help, menu - to show this menu.\n' +
            '  cheat      - show the current number.\n' +
            '  init       - randomize a new number.\n' +
            '  anything else is treated as a guess.'
    )
}
  
/**
 * Init the game and guess on (another) number.
 *
 * @param {object} game The current game being played.
 *
 * @returns {void}
 */
function makeInit (game) {
    game.init()
    console.info(' I am know thinking of another number.')
}
  
/**
 * Check the number current being used as target.
 *
 * @param {object} game The current game being played.
 *
 * @returns {void}
 */
function makeCheat (game) {
    console.info(` I am thinking of number ${game.cheat()}`)
}
  
/**
 * Guess the number and check if its correct.
 *
 * @param {object}   game  The current game being played.
 * @param {number} guess The number being guessed.
 *
 * @returns {void}
 */
function makeGuess (game, guess) {
    guess = Number.parseInt(guess)

    if (game.check(guess)) {
        console.info(' Congratulations! You guessed the number I thought of.')
        return
    }

    console.info(` Wrong! The number is ${game.compare(guess)}.`)
}

  