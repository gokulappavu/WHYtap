const mongoose = require("mongoose");
const { v4 } = require("uuid");



const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4
    },
    userName: String,
    email: {
        type: String,
        unique: true
    },
    age: Number,
    password: String,
    profile: String,
    userId: {
        type: String,
        default: v4
    }
},
{timestamps: true } 
);

const register = mongoose.model("register", userSchema);


module.exports = register;