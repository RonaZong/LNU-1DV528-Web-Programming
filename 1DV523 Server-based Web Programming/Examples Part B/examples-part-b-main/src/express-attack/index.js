const express = require('express')
const session = require('express-session')
const app = express()
const path = require('path')
const port = 3000
const loginRouter = require('./routes/attack')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Populates req.session
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'keyboard cat'
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/attack', loginRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
