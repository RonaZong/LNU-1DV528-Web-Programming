export const controller = {}

/**
 * Home page where to start the game.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.home = (req, res) => {
  res.render('home')
}

/**
 * Initiate the game.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.init = (req, res) => {
  req.session.number = Math.floor(Math.random() * 100 + 1)
  res.redirect('/guess/guess')
}

/**
 * Let the user make a guess.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.guess = (req, res) => {
  const lastGuess = req.session.lastGuess ?? null
  const flashMessage = req.session.flashMessage ?? null
  const numGuesses = req.session.numGuesses ?? 0

  req.session.lastGuess = null
  req.session.flashMessage = null

  const data = {
    lastGuess,
    flashMessage,
    numGuesses
  }
  res.render('guess_form', data)
}

/**
 * Process the guess made by the user.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.guessCheck = (req, res) => {
  const number = req.session.number
  const lastGuess = parseInt(req.body.guessedNumber)
  const numGuess = req.session.numGuesses ?? 0

  req.session.numGuesses = numGuess + 1
  req.session.lastGuess = lastGuess

  if (lastGuess === number) {
    req.session.flashMessage = 'CORRECT! You win the game!'
  } else if (lastGuess > 100) {
    req.session.flashMessage = 'OUT OF BOUNDS! To high!'
  } else if (lastGuess < 1) {
    req.session.flashMessage = 'OUT OF BOUNDS! To low!'
  } else if (lastGuess > number) {
    req.session.flashMessage = 'To high!'
  } else if (lastGuess < number) {
    req.session.flashMessage = 'To low!'
  } else {
    req.session.flashMessage = 'Was that really a number?'
  }
  res.redirect('/guess/guess')
}

/**
 * Cheat and show the current number.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.cheat = (req, res) => {
  req.session.flashMessage = `CHEATER: The number is ${req.session.number}.`
  res.redirect('/guess/guess')
}

/**
 * Show the content of the session.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.session = (req, res) => {
  const data = {
    session: req.session
  }
  res.render('session', data)
}
