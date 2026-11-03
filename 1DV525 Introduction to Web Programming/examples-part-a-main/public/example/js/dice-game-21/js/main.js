/**
 *JavaScript main.
 */
import Player from './modules/Player.js'

const player = new Player()
const computer = new Player()

// Get element
const start = document.getElementById('start')
const playerArea = document.getElementById('player-area')
const playerSum = document.getElementById('player-sum')
const playerRolls = document.getElementById('player-rolls')
const roll = document.getElementById('roll')
const stop = document.getElementById('stop')
const computerArea = document.getElementById('computer-area')
const computerRoll = document.getElementById('computer-roll')
const computerSum = document.getElementById('computer-sum')
const computerRolls = document.getElementById('computer-rolls')
const playerWin = document.getElementById('player-win')
const computerWin = document.getElementById('computer-win')

// Start the game
start.addEventListener('click', () => {
  player.reset()
  playerSum.innerHTML = player.sum()
  playerRolls.innerHTML = player.rolls()
  playerArea.classList.remove('hidden')
  computerArea.classList.add('hidden')
  playerWin.classList.add('hidden')
  computerWin.classList.add('hidden')
})

// Player roll a dice
roll.addEventListener('click', () => {
  player.roll()
  playerSum.innerHTML = player.sum()
  playerRolls.innerHTML = player.rolls()
})

// Player chooses stop
stop.addEventListener('click', () => {
  computer.reset()
  computerSum.innerHTML = computer.sum()
  computerRolls.innerHTML = computer.rolls()
  computerArea.classList.remove('hidden')
})

// Computer rolls
computerRoll.addEventListener('click', () => {
  while (computer.score() <= 18) {
    computer.roll()
    computerSum.innerHTML = computer.sum()
    computerRolls.innerHTML = computer.rolls()
  }

  let winner = playerWin
  if (player.score() > 21) {
    winner = computerWin
  } else if (computer.score() > 21) {
    winner = playerWin
  } else if (computer.score() >= player.score()) {
    winner = computerWin
  }
  winner.classList.remove('hidden')
})
