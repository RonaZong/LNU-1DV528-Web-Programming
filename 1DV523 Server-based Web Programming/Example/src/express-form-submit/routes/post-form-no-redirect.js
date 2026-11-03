var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  let data = {

  }
  res.render('form/post-no-redirect', data);
});

router.post('/process', (req, res, next) => {
  let data = {
    'today': new Date().toUTCString(),
    'incoming': req.body,
    'incomingJSON': JSON.stringify(req.body, null, 2)
  }
  res.render('form/post-result-no-redirect', data);
});

module.exports = router;
