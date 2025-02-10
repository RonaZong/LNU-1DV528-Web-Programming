import controller from '../controllers/catController.js'

import express from 'express'
const router = express.Router()

export default router

router.get('/', controller.list)
router.get('/add', controller.add)
router.get('/:name', controller.findOne)
