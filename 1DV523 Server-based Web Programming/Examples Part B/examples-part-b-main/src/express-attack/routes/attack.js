const express = require('express')
const router = express.Router()
const controller = require('../controllers/attackController.js')

module.exports = router

router.get('/', controller.welcome)

router.get('/xss1', controller.xss1)
router.get('/xss2', controller.xss2)
router.get('/xss3', controller.xss3)

router.get('/sql', controller.sql)

router.get('/login', controller.loginForm)
router.post('/login', controller.loginProcess)
router.get('/login-success', controller.loginSuccess)
