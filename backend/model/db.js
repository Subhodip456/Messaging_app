const mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    lastRegisteredAt:Date
})

const db = mongoose.model("db",userSchema)

module.exports = db