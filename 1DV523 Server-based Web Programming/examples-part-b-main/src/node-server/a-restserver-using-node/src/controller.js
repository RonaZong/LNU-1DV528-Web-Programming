/**
 * A sample controller with endpoints, created as a Node module.
 */
const usersData = require('../data/users.json')
// const userData = require('../data/user.json')

module.exports = {}

/**
 * @param req
 */
module.exports.logger = (req) => {
  const url = req.url
  const method = req.method

  console.log(`Got request on url '${url}' using method '${method}'`)
}

/**
 * @param req
 * @param res
 */
module.exports.index = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello\n\nI am a REST server.\nUse the GET /api/users to get a list of users.\nUse GET /api/user/1 to get the user with id 1.\nUse any POST request to get a specific response.')
}

/**
 * @param req
 * @param res
 */
module.exports.post = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('You used the method POST to access this site.\n')
}

/**
 * @param req
 * @param res
 */
module.exports.users = (req, res) => {
  // console.log(usersData)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(usersData, null, 2))
}

/**
 * @param req
 * @param res
 * @param id
 */
module.exports.userById = (req, res, id) => {
  // console.log(userData)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  // res.end(JSON.stringify(userData, null, 2))
  res.end(JSON.stringify(usersData.data[id - 1], null, 2))
}
