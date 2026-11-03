const controller = {}
module.exports = controller

controller.index = (req, res) => {
  console.log('Game')
  res.render('game/index', [])
}

controller.init = (req, res) => {
  req.session.theNumber = Math.floor(Math.random() * (100) + 1)
  res.redirect('/game/play')
}

controller.play = (req, res) => {
  const data = {
    message: req.session.message || null
  }

  delete req.session.message

  res.render('game/play', data)
}

controller.guess = (req, res) => {
  let guess = parseInt(req.body.guess)
  let num = req.session.theNumber

  if (guess > num) {
    req.session.message = 'To high, guess again!'
  } else if (guess < num) {
    req.session.message = 'To low, guess again!'
  } else if (guess === num) {
    req.session.message = 'CORRECT, you have guesse the number!'
  }

  res.redirect('/game/play')
}

controller.cheat = (req, res) => {
  req.session.message = `The number is ${req.session.theNumber}`
  res.redirect('/game/play')
}
