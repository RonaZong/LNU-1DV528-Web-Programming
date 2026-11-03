import express from 'express'
import logger from 'morgan'
import http from 'http'
//import { Server } from 'socket.io'
import { createServer, connection } from './socketio.mjs'

const app = express()
const server = http.createServer(app)
//const io = new Server(server)
const io = createServer(server)

io.on('connection', connection)

app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!\n')
})

export default (port = 3000) => {
  server.listen(port, () => {
    console.log(`Listening at port ${port}`)
  })
}
