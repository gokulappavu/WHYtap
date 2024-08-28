const mongoose = require("mongoose");
const { v4 } = require("uuid");


const accountSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4()
    },
    AccHolderName : {
        type: String,
    },
    mobileNumber : {
        type : Number,
    },
    email :{
        type:String,
    },
    address :{
        type:String,
    },
    typeOfAccount: {
        type: String
    },
    aadharNumber: {
        type: Number
    },
    panNumber: {
        type: String
    },
    aadhar: {
        type: String
    },
    pan: {
        type: String
    },
    userId: {
        type: String
    },   

},
{ timestamps: true }
);


const AccountModel = mongoose.model("account", accountSchema);

module.exports = AccountModel;




// account Create : 
// 1.AccHolderName
// 2.PhoneNumber
// 3.Email
// 4.address
// 5.type of holder
// 6.adhar card number
// 7.Pan card number
// 8.User name
// 9.Password
// 10.M pin