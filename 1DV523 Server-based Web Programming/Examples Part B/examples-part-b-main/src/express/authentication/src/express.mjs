import express from 'express'
import session from 'express-session'
import logger from 'morgan'

import userRoute from './route/user_route.mjs'
import adminRoute from './route/admin_route.mjs'

const app = express()

app.set('view engine', 'ejs')

// Enable the session
app.use(session({
  cookie: {
    maxAge: 60000
  },
  resave: false,
  saveUninitialized: true,
  secret: 'keyboard cat'
}))

// Enable use of flash messages and prepare the data object
app.use((req, res, next) => {
  res.data = {}
  res.data.flashMessage = null
  if (req.session && req.session.flashMessage) {
    res.data.flashMessage = req.session.flashMessage
    req.session.flashMessage = null
  }
  next()
})

// Check if user is logged in and prepare the data object
app.use((req, res, next) => {
  res.data.user = {
    acronym: null,
    role: null
  }
  if (req.session && req.session.user) {
    res.data.user.acronym = req.session.user.acronym ?? null
  }
  if (req.session && req.session.user) {
    res.data.user.role = req.session.user.role ?? null
  }
  next()
})

app.use(logger('dev', { immediate: true }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!\n')
})

app.use('/user', userRoute)
app.use('/admin', adminRoute)

export default (port = 3000) => {
  app.listen(port, () => {
    console.log(`Listening at port ${port}`)
  })
}
