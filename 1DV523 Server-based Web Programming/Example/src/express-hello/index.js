const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello AGAIN World!')
})

app.post('/user/login', (req, res) => {
  console.log(req.body) // Will be empty, more configuration is needed
  res.send('POST Hello World from /user/login')
})

app.get('/api/json', (req, res) => {
  res.json({
    'key 1': 'Value 1',
    'key 2': 'Value 2',
    'name': 'Mikael'
  })
})

app.get('/api/user/:id', (req, res) => {
  res.json({
    'Message': `You are requesting a user with id ${req.params.id}`
  })
})

app.get('/user/login', (req, res) => {
  res.send('<p>The querystring contains the following:<pre>' + JSON.stringify(req.query, null, 4))
})

app.get('/redirect/somewhere', (req, res) => {
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
