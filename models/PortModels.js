import mongoose from 'mongoose'
const portSchema = mongoose.Schema({
  name: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdOn: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedOn: { type: Date, default: Date.now },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
  stocks: [
    {
      stock: { type: mongoose.Schema.Types.ObjectId, ref: 'Stock' }, // Reference to Stock model
      value: { type: Number, default: 0 }, // Value associated with the stock in this port
    },
  ],
})

export default mongoose.model('Port', portSchema)
