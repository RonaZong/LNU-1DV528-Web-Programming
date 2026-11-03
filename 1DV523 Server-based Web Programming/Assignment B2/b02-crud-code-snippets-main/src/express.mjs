import express from 'express'
import logger from 'morgan'
import session from 'express-session'
import flash from 'connect-flash'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import { fileURLToPath } from 'node:url'

import authRoutes from './routes/authRoutes.mjs'
import snippetRoutes from './routes/snippetRoutes.mjs'

const projectRoot = new URL('../', import.meta.url)
dotenv.config({ path: fileURLToPath(new URL('.env', projectRoot)) })

const app = express()
app.set('views', fileURLToPath(new URL('views', projectRoot)))

// Middleware
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(fileURLToPath(new URL('public', projectRoot))))

// Session configuration - fixed to use secret option properly
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  })
)

app.use(flash())

// View engine setup
app.set('view engine', 'ejs')

// Flash messages middleware
app.use((req, res, next) => {
  res.locals.userId = req.session.userId ? String(req.session.userId) : null
  res.locals.success = req.flash('success')
  res.locals.error = req.flash('error')
  next()
})

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`)
  next()
})

// Routes
app.use('/auth', authRoutes)
app.use('/snippets', snippetRoutes)

// Root route
app.get('/', (req, res) => {
  res.redirect('/snippets')
})

// Error handler
app.use((req, res) => res.status(404).render('404'))
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).render('500')
})

// Get the port number from the environment or use 3000 as default
export { app }

export default async (port = process.env.PORT || 3000) => {
  if (!process.env.SESSION_SECRET) {
    throw new Error('Set SESSION_SECRET in .env before starting the application.')
  }
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/code_snippets', {
    serverSelectionTimeoutMS: 5000
  })
  console.log('Connected to MongoDB')
  return app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log('Press Ctrl-C to terminate...')
  })
}
