const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    email: String,
    UID: String,
    role: String
})

module.exports = mongoose.model('Users',userSchema);