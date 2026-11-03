const express = require('express')
const router = express.Router()
const controller = require('../controllers/loginController.js')

module.exports = router

router.get('/', controller.welcome)

router.get('/login', controller.loginForm)
router.post('/login', controller.loginProcess)

router.get('/profile/:user', controller.profile)

router.get('/protected', controller.protected)

router.get('/logout', controller.logoutForm)
router.post('/logout', controller.logoutProcess)
