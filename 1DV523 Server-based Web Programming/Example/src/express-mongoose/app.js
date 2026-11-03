const express = require('express')

// Constants
const PORT = 8008

// App
const app = express()

// Routes
var catRouter = require('./routes/cat')

// Test route to show it works
app.get('/', function (req, res) {
  res.send('Hello world!!!!!!!\n')
})

app.use('/cat', catRouter)

app.listen(PORT)
console.log('Running on http://localhost:' + PORT)
