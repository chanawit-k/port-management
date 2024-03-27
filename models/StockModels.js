import mongoose from 'mongoose'

const stockSchema = mongoose.Schema({
  name: { type: String, required: true }, // Name of the stock
})

export default mongoose.model('Stock', stockSchema)
