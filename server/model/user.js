const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1,
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type : String,
        enum : ['user', 'admin'],
        default : 'user',
        required : true
    },
    token: {
        type: String,
    },
    tokenExp: {
        type: Number,
    }
})

const User = mongoose.model('User', userSchema);

module.exports = { User }