import express from 'express'
import logger from 'morgan'
import crudRoute from './route/crud_route.mjs'

const app = express()

app.set('view engine', 'ejs')

app.use(logger('dev', { immediate: true }))

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }))

// Parse JSON bodies (as sent by API clients)
app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!\n')
})

app.use('/crud', crudRoute)

export default (port = 3000) => {
  app.listen(port, () => {
    console.log(`Listening at port ${port}`)
  })
}
