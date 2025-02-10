var express = require('express')
var router = express.Router()
var path = require('path')

const usersDataFile = path.join(__dirname, '..', 'data', 'users.json')
const usersData = require(usersDataFile)

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

/* GET users listing. */
router.get('/list', function (req, res, next) {
  console.log(usersData)

  // res.writeHead(200, { 'Content-Type': 'application/json' })
  // res.end(JSON.stringify(usersData, null, 2))

  res.json(usersData)
})

router.get('/id/:userId', function (req, res, next) {
  const userId = req.params.userId
  const user = usersData.data[userId - 1]

  console.log(user)
  res.json(user)
})

module.exports = router
