var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  const data = {
    title: 'Express',
    something: 'Mumintrollet'
  }

  res.render('index', data)
  // res.render('index', { title: 'Express' });
})

router.get('/mumin', function (req, res, next) {
  res.send('Mumintrollet')
  // render('index', { title: 'Express' });
})

module.exports = router
