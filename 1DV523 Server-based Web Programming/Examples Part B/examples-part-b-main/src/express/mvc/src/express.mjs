import express from 'express'
import logger from 'morgan'
import userRoute from './route/user_route.mjs'

const app = express()

app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users', userRoute)

// Get the port number from the environment or use 3000 as default
export default (port = process.env.PORT || 3000) => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
}
