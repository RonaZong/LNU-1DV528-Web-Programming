var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session)
  res.render('index', {
    title: 'Express',
    session: JSON.stringify(req.session, null, 2)
  });
});

module.exports = router;
