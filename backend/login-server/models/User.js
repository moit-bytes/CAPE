const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    clgName: String,
    codechef: String,
    codeforces: String,
    github: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;