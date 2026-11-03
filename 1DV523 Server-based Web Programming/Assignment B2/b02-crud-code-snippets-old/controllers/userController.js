import User from '../models/user.js'

const controller = {}
export default controller

// List all cats
controller.list = async (req, res) => {
  console.log('Here are the users')

  const users = await Cat.find()
  console.log(JSON.stringify(users, null, 2))

  res.send(
    '<pre>'
    + JSON.stringify(users, null, 2)
  )
}

// Add new users
controller.add = async (req, res) => {
  const newUser = new Cat({ name: ''})

  await newUser.save()
  console.log(newUser.speak())

  res.send(
    "A user was added.<p>'"
    + newUser.speak()
    + "'"
  )
}

// Find one cat among the all
controller.findOne = async (req, res) => {
  let name = req.params.name
  console.log(`Trying to find user with name: '${name}'`)

  let user = await User.findOne({'name' : name})
  console.log(JSON.stringify(user, null, 2))

  let found = user ? '<p>' + user.found() : ' user is missing!'
  res.send(
    '<pre>'
    + JSON.stringify(user, null, 2)
    + found
  )
}
