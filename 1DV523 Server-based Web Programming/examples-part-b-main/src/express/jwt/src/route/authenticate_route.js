import express from 'express'
import { controller } from '../controller/authenticate_controller.js'

export const router = express.Router()

router.post('/register', controller.register)
router.get('/list', controller.list)

router.post('/login', controller.login)
// router.post('/login', controller.loginProcess)
// router.get('/', controller.profile)

// router.get('/logout', controller.logout)

// router.get('/session', controller.session)
// router.get('/data', controller.data)

// router.get('/hash', controller.hash)
// router.post('/hash', controller.hashProcess)
