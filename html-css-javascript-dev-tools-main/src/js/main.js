// import Dice from './modules/Dice.js'
import Player from './modules/Player.js'

console.log('Ready to roll some dices!')

// const dice = new Dice()
// dice.roll()
// console.log(dice.last())
// console.log(dice.graphical())

const player = new Player()
const computer = new Player()

// Get all elements
const start = document.getElementById('start')
const playerDiv = document.getElementById('player')
const computerDiv = document.getElementById('computer')
const rollButton = document.getElementById('roll')
const stopButton = document.getElementById('stop')
const playerSum = document.getElementById('player-sum')
const playerRolls = document.getElementById('player-rolls')
const playerWin = document.getElementById('player-win')
const computerRoll = document.getElementById('computer-roll')
const computerSum = document.getElementById('computer-sum')
const computerRolls = document.getElementById('computer-rolls')
const computerWin = document.getElementById('computer-win')

// Start/restart the game
start.addEventListener('click', () => {
  player.reset()
  playerSum.innerHTML = player.sum()
  playerRolls.innerHTML = player.rolls()
  playerDiv.classList.remove('hidden')
  computerDiv.classList.add('hidden')
  playerWin.classList.add('hidden')
  computerWin.classList.add('hidden')
})

// Player rolls a dice
rollButton.addEventListener('click', () => {
  player.roll()
  playerSum.innerHTML = player.sum()
  playerRolls.innerHTML = player.rolls()
})

// Player chooses stop
stopButton.addEventListener('click', () => {
  computer.reset()
  computerSum.innerHTML = computer.sum()
  computerRolls.innerHTML = computer.rolls()
  computerDiv.classList.remove('hidden')
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
