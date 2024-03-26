const mongoose = require('mongoose')
const transactionSchema = mongoose.Schema({
  description: String,
  amount: Number,
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  port: { type: mongoose.Schema.Types.ObjectId, ref: 'Port' },
})

export default mongoose.model('Transaction', transactionSchema)
