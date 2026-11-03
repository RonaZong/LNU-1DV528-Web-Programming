const mongoose = require("mongoose")
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
const userSchema = new mongoose.Schema({
  name: String
})

// Add a method to the schema.
userSchema.methods.found = function () {
  const checking = this.name
    ? 'User ' + this.name
    : "does not exist"
  console.log(checking)
  return checking
}

// Compile a model from the schema
const User = mongoose.model('User', userSchema)

// The parts that are exported
export default User
