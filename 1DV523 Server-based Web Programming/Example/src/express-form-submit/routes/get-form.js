var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  let data = {

  }
  res.render('form/get', data);
});

router.get('/process', (req, res, next) => {
  let data = {
    'today': new Date().toUTCString(),
    'incoming': req.query,
    'incomingJSON': JSON.stringify(req.query, null, 2)
  }
  res.render('form/get-result', data);
});

module.exports = router;
