import express from 'express'
import session from 'express-session'
import logger from 'morgan'

import guessRoute from './route/guess_route.mjs'

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

app.use(logger('dev', { immediate: true }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!\n')
})

app.use('/guess', guessRoute)

export default (port = 3000) => {
  app.listen(port, () => {
    console.log(`Listening at port ${port}`)
  })
}
