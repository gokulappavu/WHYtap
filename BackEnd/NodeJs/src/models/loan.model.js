const mongoose  = require("mongoose");


const loanSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.UUID,
    accountHolderName: {
        type: String
    },
    accountNumber: {
        type: Number
    },
    loanAmount: {
        type: String
    },
    incomeVerification: {
        type: Boolean,
        default: false
    },
    addressVerification: {
        type: Boolean,
        default: false
    },
    referenceId: {
        type: String
    },
    userId: {
        type: String
    }
},
{ timestamps: true }
);


const LoanModel = mongoose.model("loan", loanSchema);


module.exports = LoanModel;



// Schema:
// 1.  account holder name
//  2. account Number
//  3. Loan amount
// 4.Income Verification
// 5.Address Verification
// 6.Reference(Surety)