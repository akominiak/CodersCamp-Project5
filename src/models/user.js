const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true,
        min: 1,
        max: 60
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 50
    }
});

const User = mongoose.model('User', userSchema);

module.exports.User = User;