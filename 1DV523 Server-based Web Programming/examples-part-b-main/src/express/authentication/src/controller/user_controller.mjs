import bcrypt from 'bcrypt'

export const controller = {}

const users = {
  doe: {
    name: 'John/Jane Doe',
    acronym: 'doe',
    plainPassword: 'doe',
    bcryptPassword: '$2b$10$dP.ylK3qPmDc8ddeIi9V7Old4nlUsmuyE7U4v8MN22pm1npPXsO6O'
  },
  admin: {
    name: 'Admin Admin',
    acronym: 'admin',
    role: 'admin',
    plainPassword: 'admin',
    bcryptPassword: '$2b$10$/SIO8Jln047tc6DEf8kDI.pEZetw3qo7SbVWNl96AHtdy7ydbGs16'
  }
}

/**
 * Home page where to start.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.home = (req, res) => {
  res.render('home', res.data)
}

/**
 * Show the login form.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.login = (req, res) => {
  res.render('login_form', res.data)
}

/**
 * Process the login.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.loginProcess = async (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const user = users[username] ?? null

  if (user) {
    // Verify that passwords match
    const hashedPassword = user.bcryptPassword
    const success = await bcrypt.compare(password, hashedPassword)

    if (success) {
      req.session.user = {
        acronym: user.acronym,
        role: user.role ?? null
      }
      req.session.flashMessage = `Welcome '${username}'!`
      console.log(req.session)
      return res.redirect('/user')
    }
  }

  req.session.user = null
  req.session.flashMessage = `Wrong user or password!`
  res.redirect('/user/login')
}

/**
 * Check if user is loggedin.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.isLoggedin = (req, res, next) => {
  if (res.data.user.acronym) {
    next()
  } else {
    res.send(403)
  }
}

/**
 * Show details on the logged in user.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.profile = (req, res) => {
  const user = res.data.user.acronym ?? null
  if (!user) {
    req.session.flashMessage = `Not a valid user!`
    return res.redirect('/user/login')
  }

  res.data.user.name = users[user].name
  res.render('profile', res.data)
}

/**
 * Logout the user.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.logout = (req, res) => {
  req.session.user = null
  res.redirect('/user/home')
}

/**
 * Show the content of the session.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.session = (req, res) => {
  res.data.session = req.session
  res.render('session', res.data)
}

/**
 * Show the content of the view data for debug purpose.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.data = (req, res) => {
  res.data.data = {...res.data}
  res.render('data', res.data)
}

/**
 * Present a form where on can try to hash a password.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.hash = (req, res) => {
  res.data.data = {...res.data}
  res.render('hash', res.data)
}

/**
 * Present a form where on can try to hash a password.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.hashProcess = async (req, res) => {
  const plainPassword = req.body.password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds)

  req.session.flashMessage = `<code>${hashedPassword}</code>`
  res.redirect('/user/hash')
}
