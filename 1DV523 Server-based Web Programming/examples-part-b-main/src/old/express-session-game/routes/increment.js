var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  console.log('Increment number welcome')
  console.log(req.session)

  res.render('increment/index', {
    title: 'Express',
    sessionId: req.session.id,
    session: JSON.stringify(req.session, null, 2)
  });
});

router.get('/add', (req, res) => {
  console.log('Add number to session')
  console.log(req.session)

  req.session.theNumber = 0

  res.redirect('/increment')
});

router.get('/inc', (req, res) => {
  console.log('Increment the number in the session')
  console.log(req.session)

  req.session.theNumber += 1

  res.redirect('/increment')
});

router.get('/del', (req, res) => {
  console.log('Remove the number from the session')
  console.log(req.session)

  delete req.session.theNumber

  res.redirect('/increment')
});

router.get('/destroy', async (req, res) => {
  console.log('Destroy the session')
  console.log(req.session)

  await req.session.destroy()

  res.redirect('/increment')
});

module.exports = router;
