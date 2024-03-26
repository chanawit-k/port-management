const mongoose = require('mongoose')

// Define the User schema
const userSchema = mongoose.Schema({
  username: String,
  email: String,
})

export default mongoose.model('User', UserSchema)
