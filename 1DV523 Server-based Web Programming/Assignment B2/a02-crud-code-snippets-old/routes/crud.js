const express = require('express')
const router = express.Router()
const controller = require('../controllers/crudController.js')

module.exports = router

// R read from database, list all items, first page
router.get('/', controller.list)

// C create new item into the database
router.get('/create', controller.createForm)
router.post('/create', controller.createSave)

// U update an existing item in the database
router.get('/update', controller.updateForm)
router.get('/update/:itemId', controller.updateForm)
router.post('/update', controller.updateSave)

// D delete item from database
router.get('/delete', controller.deleteForm)
//router.get('/delete/:itemId', controller.deleteForm)
router.post('/delete', controller.deleteSave)
