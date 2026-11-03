import express from 'express'
import { controller } from '../controller/crud_controller.mjs'

const router = express.Router()
export default router

// R read from database, list all items
router.get('/', controller.list)
router.get('/id/:itemId', controller.show)

// C create new item into the database
router.get('/create', controller.createForm)
router.post('/create', controller.createSave)

// U update an existing item in the database
router.get('/update/:itemId', controller.updateForm)
router.post('/update', controller.updateSave)

// D delete item from database
router.get('/delete', controller.deleteFormSelect)
router.get('/delete/:itemId', controller.deleteForm)
router.post('/delete', controller.deleteSave)
