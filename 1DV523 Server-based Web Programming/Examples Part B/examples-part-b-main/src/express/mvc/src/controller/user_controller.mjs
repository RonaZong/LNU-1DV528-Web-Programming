const controller = {}
export default controller

const users = []
let id = 1

// Read all users
controller.list = (req, res) => {
  console.log('# List all users')
  res.render('read', { users })
}

// Add a user
controller.add = (req, res) => {
  console.log('# Add a user')
  users.push({
    id: id++,
    nick: 'doe',
    name: 'John/Jane Doe'
  })
  res.redirect('/users')
}

// Delete a user
controller.delete = (req, res) => {
  const id = parseInt(req.params.id)
  console.log(`# Delete a user by id=${id}`)
  let i = users.length
  while (i--) {
    // console.log(i, users[i])
    if (users[i].id === id) {
      // console.log('REMOVING ' + id)
      users.splice(i, 1)
      break
    }
  }
  res.redirect('/users')
}

// Update a user
controller.update = (req, res) => {
  const id = parseInt(req.params.id)
  const nick = req.params.nick
  const name = req.params.name

  console.log(`# Update the user with id=${id}`)
  let i = users.length
  while (i--) {
    if (users[i].id === id) {
      users[i].nick = nick
      users[i].name = name
      break
    }
  }
  res.redirect('/users')
}
