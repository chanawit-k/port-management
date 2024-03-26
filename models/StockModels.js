const stockSchema = mongoose.Schema({
  name: { type: String, required: true }, // Name of the stock
  value: { type: Number, default: 0 }, // Value associated with the stock
})

export default mongoose.model('Stock', stockSchema)
