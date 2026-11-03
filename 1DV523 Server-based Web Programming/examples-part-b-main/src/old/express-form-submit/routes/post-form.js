var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  let data = {

  }
  res.render('form/post', data);
});

router.post('/process', (req, res, next) => {
  let data = {
    'incoming': req.body,
    'incomingJSON': JSON.stringify(req.body, null, 2)
  }
  console.log(data)
  res.redirect('/form/post/result');
});

router.get('/result', (req, res, next) => {
  let data = {
    'today': new Date().toUTCString()
  }
  res.render('form/post-result', data);
});

module.exports = router;
