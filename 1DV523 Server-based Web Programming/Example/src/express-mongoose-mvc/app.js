import express from 'express'
const app = express()

const PORT = process.env.PORT || 8008

import catRouter from './routes/cat.js'

// Test route to show it works
app.get('/', function (req, res) {
  res.send('Hello world!!!!!!!\n')
})

app.use('/cat', catRouter)

app.listen(PORT)
console.log('Running on http://localhost:' + PORT)
