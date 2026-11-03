// Import Node.js libraries
const express = require("express")
const session = require("express-session")

// Initialize the express zpp
const app = express()
const path = require("path")
const port = 3000
// const mainRouter = require("./routes/main")
const controller = require('./controllers/loginController.js')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }))
// Serving public
// app.use(express.static(__dirname))

// Populates req.session
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'keyboard cat'
}))

app.get('/', controller.welcome)

app.get('/login', controller.loginForm)
app.post('/login', controller.loginProcess)

app.get('/profile/:user', controller.profile)

app.get('/protected', controller.protected)

app.get('/logout', controller.logoutForm)
app.post('/logout', controller.logoutProcess)


app.listen(port, () => {
  console.log("Server listening at http://localhost: ", port)
})
