const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// Use the container name as the server name
// mongoose.connect('mongodb://localhost/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

mongoose.connect('mongodb://db/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Use schemas
const catSchema = new mongoose.Schema({
  name: String
})

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
/**
 * Add a method to the schema.
 */
catSchema.methods.speak = function () {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : "I don't have a name"
  console.log(greeting)
  return greeting
}

// Compile a model from the schema
const Cat = mongoose.model('Cat', catSchema)

// The routes that are exported
module.exports = router

// List all cats
router.get('/', function (req, res, next) {
  console.log('Here are the cats')

  Cat.find(function (err, kittens) {
    if (err) return console.error(err)

    console.log(JSON.stringify(kittens, null, 2))

    res.send('<pre>' + JSON.stringify(kittens, null, 2))
  })
})

// Add new cats
router.get('/add', async function (req, res, next) {
  const rand = Math.floor(Math.random() * Math.floor(10))
  const kitty = new Cat({ name: 'Zildjian ' + rand })

  // kitty.save()
  // .then(() => console.log(kitty.speak()));

  await kitty.save()
  console.log(kitty.speak())

  res.send("A cat was added.<p>'" + kitty.speak() + "'")
})

// Find one cat among the all
router.get('/:name', async function (req, res, next) {
  let name = req.params.name
  console.log(`Trying to find cat with name: '${name}'`)

  // Cat.findOne({'name' : name}, function (err, kittens) {
  //   if (err) return console.error(err)
  //
  //   console.log(JSON.stringify(kittens, null, 2))
  //
  //   res.send('<pre>' + JSON.stringify(kittens, null, 2))
  // })

  kitty = await Cat.findOne({'name' : name})
  console.log(JSON.stringify(kitty, null, 2))
  let speak = kitty ? '<p>' + kitty.speak() : ' kitten is missing!'
  res.send('<pre>' + JSON.stringify(kitty, null, 2) + speak)
})
