import express from 'express'
import http from 'http'
import { router as apikeyRoute } from './apikey_route.js'
import { router as authenticateRoute } from './authenticate_route.js'
import { router as helloRoute } from './hello_route.js'

export const router = express.Router()

router.use('/api/v1/apikey', apikeyRoute)
router.use('/api/v1/authenticate', authenticateRoute)
router.use('/hello', helloRoute)
