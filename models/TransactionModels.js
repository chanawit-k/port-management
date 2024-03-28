const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
  description: String,
  dateIn: { type: Date },
  dateOut: { type: Date },
  priceIn: Number,
  priceOut: Number,
  unitIn: Number,
  unitOut: Number,
  realizedGain: Number,
  realizedGainPercent: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  port: { type: mongoose.Schema.Types.ObjectId, ref: 'Port' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdOn: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedOn: { type: Date, default: Date.now },
})

export default mongoose.model('Transaction', transactionSchema)
