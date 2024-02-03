const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    city: String,
    occupation: String,
    salarygrade: String,
    username: String
})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel;