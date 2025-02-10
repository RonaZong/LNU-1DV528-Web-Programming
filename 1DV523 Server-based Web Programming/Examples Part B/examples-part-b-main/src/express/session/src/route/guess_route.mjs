import express from 'express'
import { controller } from '../controller/guess_controller.mjs'

const router = express.Router()
export default router

router.get('/', controller.home)
router.post('/init', controller.init)

router.get('/guess', controller.guess)
router.post('/guess', controller.guessCheck)

router.get('/cheat', controller.cheat)
router.get('/session', controller.session)
