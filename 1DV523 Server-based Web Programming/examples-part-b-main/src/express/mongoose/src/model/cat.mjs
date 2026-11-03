// https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import * as dotenv from 'dotenv'
// console.log(process.env)

import mongoose from 'mongoose'
dotenv.config()
mongoose.Promise = global.Promise

export const model = {}

//
// Connect to the MongoDB database
//
console.log(process.env.MONGO_URI)
mongoose.set('strictQuery', false) // fix to prepare for 7.0 and avoid warning
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 3000
})

//
// Create a database schema
//
const Schema = mongoose.Schema
const catSchema = new Schema({
  name: String
})

// methods must be added to the schema before compiling with mongoose.model()
catSchema.methods.speak = function () {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : "I don't have a name"
  console.log(greeting)
  return greeting
}

// Compile a model from the schema
const Cat = mongoose.model('Cat', catSchema)

/**
 * List all cats.
 *
 * @returns {Array} array with cats.
 */
model.listAll = async () => {
  console.log('Reading cats from the database...')
  const kittens = await Cat.find()
  console.log(JSON.stringify(kittens, null, 2))
  return kittens
}

/**
 * Delete all cats.
 */
model.deleteAll = async () => {
  await Cat.deleteMany()
  console.log('All cats where deleted')
}

/**
 * Add new cat.
 */
model.add = async () => {
  const rand = Math.floor(Math.random() * Math.floor(10))
  const kitty = new Cat({
    name: 'Zildjian ' + rand
  })

  await kitty.save()
  console.log('A cat was added - ' + kitty.speak())
}

/**
 * Find a cat by name.
 *
 * @param {string} name a name to search for.
 * @returns {Array} with cats.
 */
model.findByName = async (name) => {
  return await Cat.find({
    name
  })
}
