import bcrypt from 'bcrypt'
import jwt from './jwt.js'

import { readFile } from 'node:fs/promises'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const usersPath = path.join(__dirname, '../../data/users.json')
const usersDb = JSON.parse(await readFile(usersPath, 'utf8'))

export const users = {}

/**
 * Get details on a specific user.
 *
 * @param {string} username Username of the user.
 * @returns {object} Details on the user.
 */
users.get = (username) => {
  return usersDb[username]
}

/**
 * Get all users.
 *
 * @returns {object} Details on all the users.
 */
users.getAll = () => {
  let res = []

  for (const user in usersDb) {
    res.push({
      username: user,
      plainPassword: usersDb[user].plainPassword
    })
  }

  return res
}

/**
 * Add a user to the database.
 *
 * @param {string} username Username of the user.
 * @param {string} password Plaintext password of the user.
 */
users.add = async (username, password) => {
  const saltRounds = 10;

  usersDb[username] = {
    username: username,
    bcryptPassword: await bcrypt.hash(password, saltRounds)
  }
  console.log('New user was registered with the details:')
  console.log(usersDb[username])
}

/**
 * Authenticate the user and return a JWT upon success.
 *
 * @param {string} username The username.
 * @param {string} password The password.
 * @returns [string,boolean]} A JWT token if login succedded, else false.
 */
users.login = async (username, password) => {
  const user = usersDb[username] ?? null

  if (user) {
    const hashedPassword = user.bcryptPassword
    const success = await bcrypt.compare(password, hashedPassword)

    if (success) {
      return jwt.getJwtToken(username, users.getRole(username), hashedPassword);
    }
  }

  return false
}

/**
 * Get the role of the user.
 *
 * @param {string} username The username.
 * @returns {string|undefined} The representation of the users role or undefined.
 */
users.getRole = (username) => {
  const user = usersDb[username] ?? null

  if (user) {
    return usersDb[username].role
  }

  return undefined
}

/**
 * Show details on the logged in user.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
users.profile = (req, res) => {
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
users.logout = (req, res) => {
  req.session.user = null
  res.redirect('/user/home')
}

/**
 * Show the content of the session.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
users.session = (req, res) => {
  res.data.session = req.session
  res.render('session', res.data)
}

/**
 * Show the content of the view data for debug purpose.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
users.data = (req, res) => {
  res.data.data = {...res.data}
  res.render('data', res.data)
}

/**
 * Present a form where on can try to hash a password.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
users.hash = (req, res) => {
  res.data.data = {...res.data}
  res.render('hash', res.data)
}

/**
 * Present a form where on can try to hash a password.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
users.hashProcess = async (req, res) => {
  const plainPassword = req.body.password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds)

  req.session.flashMessage = `<code>${hashedPassword}</code>`
  res.redirect('/user/hash')
}
