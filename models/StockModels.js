import mongoose from 'mongoose'

const stockSchema = mongoose.Schema({
  name: { type: String, required: true }, // Name of the stock
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdOn: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedOn: { type: Date, default: Date.now },
})

export default mongoose.model('Stock', stockSchema)
