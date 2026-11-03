var controller = require('../controllers/gameController')

var express = require('express');
var router = express.Router();

router.get('/', controller.index);
router.get('/init', controller.init);
router.get('/play', controller.play);
router.get('/cheat', controller.cheat);
router.post('/guess', controller.guess);

module.exports = router;
