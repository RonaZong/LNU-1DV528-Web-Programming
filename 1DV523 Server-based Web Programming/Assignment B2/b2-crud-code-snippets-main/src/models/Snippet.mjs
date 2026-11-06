import mongoose from 'mongoose'

const snippetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  code: { type: String, required: true },
  tags: { type: [String], default: [] },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Snippet', snippetSchema)
