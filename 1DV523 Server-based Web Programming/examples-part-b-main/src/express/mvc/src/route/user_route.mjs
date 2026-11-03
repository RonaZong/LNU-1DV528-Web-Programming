import express from 'express'
import controller from '../controller/user_controller.mjs'

const router = express.Router()
export default router

// Show users
router.get('/', controller.list)

// Add user
router.post('/add', controller.add)

// Remove a user by id
router.post('/delete/:id', controller.delete)

// Update a user by id
router.post('/update/:id/:nick/:name', controller.update)
