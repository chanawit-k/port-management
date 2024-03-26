import mongoose from 'mongoose'
const portSchema = mongoose.Schema({
  name: String,
  location: String,
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
})

const transactionSchema = mongoose.Schema({
  description: String,
  amount: Number,
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  port: { type: mongoose.Schema.Types.ObjectId, ref: 'Port' },
})

export default mongoose.model('Port', portSchema)
