import express from 'express'
import logger from 'morgan'
import wsServer from './websocket.mjs'

const app = express()

app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!\n')
})

export default (port = 3000) => {
  const server = app.listen(port, () => {
    console.log(`Listening at port ${port}`)
  })

  // Enable upgrade requests on http to ws
  server.on('upgrade', (request, socket, head) => {
    wsServer.handleUpgrade(request, socket, head, socket => {
      wsServer.emit('connection', socket, request)
    })
  })
}
