import { users } from '../model/users.js'

export const controller = {}

/**
 * Register a new user.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.register = async (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const user = users[username] ?? null

  if (users.get(username)) {
    return res.status(409).json({
      type: 'failed',
      message: 'The user already exists and can not be registered!'
    })
  }

  await users.add(username, password)
  res.json({
    type: 'success',
    message: 'The user was registered.',
    user: {
      username: username
    }
  })
}

/**
 * List all the users.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.list = (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(users.getAll(), null, 2))
}

/**
 * Perform a login and generate a JWT.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
controller.login = async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const jwtToken = await users.login(username, password)
  if (!jwtToken) {
    return res.status(401).json({
      type: 'failed',
      message: 'Wrong user or password!'
    })
  }

  res.json({
    type: 'success',
    message: 'The user was authenticated.',
    user: {
      username: username,
      role: users.getRole(username)
    },
    token: jwtToken
  })
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
