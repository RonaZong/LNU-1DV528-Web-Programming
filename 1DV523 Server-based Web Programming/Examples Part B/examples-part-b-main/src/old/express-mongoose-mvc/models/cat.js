import mongoose from 'mongoose'
mongoose.Promise = global.Promise

// Connect to the database instance
//const dsn = process.env.DSN || 'mongodb://mongo/test'
const dsn = process.env.DSN || 'mongodb://localhost/test'
mongoose.connect(dsn, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 3000
})

// Use schemas
const catSchema = new mongoose.Schema({
  name: String
})

// Add a method to the schema.
catSchema.methods.speak = function () {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : "I don't have a name"
  console.log(greeting)
  return greeting
}

// Compile a model from the schema
const Cat = mongoose.model('Cat', catSchema)

// The parts that are exported
export default Cat
