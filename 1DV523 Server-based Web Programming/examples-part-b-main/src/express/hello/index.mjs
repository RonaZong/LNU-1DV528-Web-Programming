// Import Express
import express from 'express'

// Get a logger
import logger from 'morgan'

const app = express()

// Set up the view engine and the directory for the view files
// app.set('views', 'view')
app.set('view engine', 'ejs')

// Add the logger
app.use(logger('dev'))

// Add a logger printing out each request
app.use((req, res, next) => {
  console.log(`Got ${req.method} request on ${req.url}`)
  next()
})

// Serve static files from public/
app.use(express.static('public'))

// Add a route saying hello
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Add a route saying hello with JSON
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
