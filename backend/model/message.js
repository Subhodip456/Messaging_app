const mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
    message:String,
    chatName:String,
    lastLoginAt:Date
})

const Messages = mongoose.model("Messages",userSchema)

module.exports = Messages