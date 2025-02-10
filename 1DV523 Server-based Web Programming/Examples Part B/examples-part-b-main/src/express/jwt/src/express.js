import express from 'express'
import http from 'http'
// import session from 'express-session'
import logger from 'morgan'
import { handler as errorHandler } from './middleware/error_handler.js'
import { router } from './route/router.js'

const app = express()

// Helmet

// Use the morgan logger
app.use(logger('dev', { immediate: true }))

//
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// EJS view engine
app.set('view engine', 'ejs')

// Use the public folder for static resources
app.use(express.static('public'))

// Mount the routes
app.use('/', router)

// Error handler
app.use('*', errorHandler.notFoundDefault)
app.use(errorHandler.errorDefault)

// Get the port number from the environment or use 3000 as default
export default (port = process.env.PORT || 3000) => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
}

// // Enable the session
// app.use(session({
//   cookie: {
//     maxAge: 60000
//   },
//   resave: false,
//   saveUninitialized: true,
//   secret: 'keyboard cat'
// }))

// // Enable use of flash messages and prepare the data object
// app.use((req, res, next) => {
//   res.data = {}
//   res.data.flashMessage = null
//   if (req.session && req.session.flashMessage) {
//     res.data.flashMessage = req.session.flashMessage
//     req.session.flashMessage = null
//   }
//   next()
// })

// // Check if user is logged in and prepare the data object
// app.use((req, res, next) => {
//   res.data.user = {
//     acronym: null,
//     role: null
//   }
//   if (req.session && req.session.user) {
//     res.data.user.acronym = req.session.user.acronym ?? null
//   }
//   if (req.session && req.session.user) {
//     res.data.user.role = req.session.user.role ?? null
//   }
//   next()
// })

