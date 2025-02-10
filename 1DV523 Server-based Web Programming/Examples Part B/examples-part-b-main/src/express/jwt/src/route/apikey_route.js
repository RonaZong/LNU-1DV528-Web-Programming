import express from 'express'
import { controller } from '../controller/apikey_controller.js'

export const router = express.Router()

router.get('/list', controller.list)
router.get('/try1', controller.verifyQueryString)
router.post('/try2', controller.verifyHeader)
router.post('/try3', controller.verifyBody)
