import Cat from '../models/cat.js'

const controller = {}
export default controller

// List all cats
controller.list = async (req, res) => {
  console.log('Here are the cats')

  const kittens = await Cat.find()
  console.log(JSON.stringify(kittens, null, 2))

  res.send(
    '<pre>'
    + JSON.stringify(kittens, null, 2)
  )
}

// Add new cats
controller.add = async (req, res) => {
  const rand = Math.floor(Math.random() * Math.floor(10))
  const kitty = new Cat({ name: 'Zildjian ' + rand })

  await kitty.save()
  console.log(kitty.speak())

  res.send(
    "A cat was added.<p>'"
    + kitty.speak()
    + "'"
  )
}

// Find one cat among the all
controller.findOne = async (req, res) => {
  let name = req.params.name
  console.log(`Trying to find cat with name: '${name}'`)

  let kitty = await Cat.findOne({'name' : name})
  console.log(JSON.stringify(kitty, null, 2))

  let speak = kitty ? '<p>' + kitty.speak() : ' kitten is missing!'
  res.send(
    '<pre>'
    + JSON.stringify(kitty, null, 2)
    + speak
  )
}
