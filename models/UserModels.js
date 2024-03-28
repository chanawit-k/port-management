const mongoose = require('mongoose')

// Define the User schema
const userSchema = mongoose.Schema({
  username: String,
  email: String,
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },
})

export default mongoose.model('User', userSchema)
