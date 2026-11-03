const crypto = require('crypto')

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data/db.sqlite');

const controller = {}
module.exports = controller

// Do not forget to separate controller code from the model (classes).
// Thin controllers - thick models

/**
 * @param req
 * @param res
 */
controller.welcome = (req, res) => {
  res.render('welcome', {})
}

/**
 * @param req
 * @param res
 */
controller.loginForm = (req, res) => {
  res.render('loginForm', {})
}

/**
 * @param req
 * @param res
 */
controller.loginSuccess = (req, res) => {
  res.render('loginSuccess', {})
}

/**
 * @param req
 * @param res
 */
controller.loginProcess = (req, res) => {
  const user = req.body.user
  const password = req.body.password
  const passwordEnc = '276405502bd6a2c0a45c17b8745ecae0'
  const pwdCheck = crypto.createHash('md5').update(password).digest('hex')

  if (user === 'doe' && passwordEnc === pwdCheck) {
    res.redirect('/attack/login-success')
  } else {
    res.redirect('/attack/login')
  }
}

/**
 * @param req
 * @param res
 */
controller.xss1 = (req, res) => {
  res.render('xss1', {
    search: req.query.search
  })
}

/**
 * @param req
 * @param res
 */
controller.xss2 = (req, res) => {
  res.render('xss2', {
    date: req.query.date
  })
}

/**
 * @param req
 * @param res
 */
controller.xss3 = (req, res) => {
  res.render('xss3', {
    color: req.query.color
  })
}

/**
 * @param req
 * @param res
 */
controller.sql = (req, res) => {
  res.render('sql', {
    search: req.query.search
  })
}
