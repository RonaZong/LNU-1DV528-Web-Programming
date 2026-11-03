const bcrypt = require('bcrypt')

const controller = {}
module.exports = controller

// Hash the passwords
const saltRounds = 10
const doePassword = bcrypt.hashSync('doe', saltRounds)
const adminPassword = bcrypt.hashSync('admin', saltRounds)

/**
 * @param req
 * @param res
 */
controller.welcome = (req, res) => {
  const flash = req.session.flash
  req.session.flash = null

  res.render('welcome', {
    flash: flash,
    user: req.session.user,
    session: JSON.stringify(req.session, null, 2)
  })
}

/**
 * @param req
 * @param res
 */
controller.loginForm = (req, res) => {
  const flash = req.session.flash
  req.session.flash = null

  res.render('loginForm', {
    flash: flash
  })
}

/**
 * @param req
 * @param res
 */
controller.loginProcess = (req, res) => {
  const user = req.body.user
  const password = req.body.password

  if (user === 'doe' && bcrypt.compareSync(password, doePassword)) {
    req.session.user = user
    req.session.flash = `You have authenticated as '${user}'.`
    res.redirect(`/login/profile/${user}`)
} else if (user === 'admin' && bcrypt.compareSync(password, adminPassword)) {
    req.session.user = user
    req.session.flash = `You have authenticated as '${user}'.`
    res.redirect(`/login/profile/${user}`)
  } else {
    req.session.flash = 'You failed to authenticate.'
    res.redirect('/login/login')
  }
}

/**
 * @param req
 * @param res
 */
controller.profile = (req, res) => {
  const user = req.params.user
  const flash = req.session.flash
  req.session.flash = null

  if (req.session.user !== user) {
    req.session.flash = 'You have no access to that link.'
    res.redirect('/login')
  }

  res.render('profile', {
    flash: flash,
    user: user
  })
}

/**
 * @param req
 * @param res
 */
controller.protected = (req, res) => {
  if (!req.session.user) {
    req.session.flash = 'You have no access to that link.'
    res.redirect('/login')
  } else {
    res.render('protected', {
      userName: req.session.user
    })
  }
}

/**
 * @param req
 * @param res
 */
controller.logoutForm = (req, res) => {
  res.render('logoutForm', [])
}

/**
 * @param req
 * @param res
 */
controller.logoutProcess = (req, res) => {
  req.session.user = null
  req.session.flash = 'You have now logged out.'
  res.redirect('/login')
}
