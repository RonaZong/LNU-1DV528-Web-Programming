import express from 'express'
import logger from 'morgan'

const app = express()

app.set('view engine', 'ejs')
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`)
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/json', (req, res) => {
  const obj = { message: 'Hello JSON World' }

  res.json(obj)
})

// Redirect
app.get('/redirect', (req, res) => {
  res.redirect('/')
})

// Route params
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})

// Render a view
app.get('/render', (req, res) => {
  const data = {
    message: 'Hello World'
  }
  res.render('hello', data)
})

app.get('/error', (req, res) => {
  throw new Error('Simulate a 500')
})

// 404 handler goes after all valid routes
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

// Error handler goes last
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Start the server
const port = 3000
app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})