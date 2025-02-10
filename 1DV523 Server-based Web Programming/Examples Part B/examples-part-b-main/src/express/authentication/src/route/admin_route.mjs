import express from 'express'
import { controller } from '../controller/admin_controller.mjs'

const router = express.Router()
export default router

router.get('/', controller.isAdmin, controller.home)
