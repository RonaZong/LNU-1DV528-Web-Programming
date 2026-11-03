import express from 'express'
import { controller } from '../controller/user_controller.mjs'

const router = express.Router()
export default router

router.get('/home', controller.home)

router.get('/login', controller.login)
router.post('/login', controller.loginProcess)
router.get('/', controller.profile)

router.get('/logout', controller.logout)

router.get('/session', controller.session)
router.get('/data', controller.data)

router.get('/hash', controller.hash)
router.post('/hash', controller.hashProcess)
