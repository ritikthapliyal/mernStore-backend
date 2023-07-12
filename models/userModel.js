const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type : String,
        unique: true,
        require : true
    },
    password: {
        type : String,
        require : true
    },
    isAdmin:{
        type: Boolean,
        required : true,
        default: false
    }
})


const User = mongoose.model('User', userSchema)

module.exports = User