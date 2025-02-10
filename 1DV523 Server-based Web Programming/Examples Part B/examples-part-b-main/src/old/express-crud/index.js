const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const crudRouter = require('./routes/crud')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }))

// Parse JSON bodies (as sent by API clients)
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World! <p>Use the path <a href="/crud">/crud</a> to get going.')
})

app.use('/crud', crudRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
