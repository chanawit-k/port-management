import mongoose from 'mongoose'
const portSchema = mongoose.Schema({
  name: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdOn: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedOn: { type: Date, default: Date.now },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
  stocks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stock' }],
})

export default mongoose.model('Port', portSchema)
