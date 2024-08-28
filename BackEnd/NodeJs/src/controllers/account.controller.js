const AccountModel = require("../models/account.model");




const createAccount = async (req, res) => {
    try {
        let userId = req.userId;

        let data = {
            ...req.body,
            userId,
        };

        const create = await AccountModel.create(data);

        res.json({
            data: create
        });

    } catch (error) {
        res.json({
            Error: error
        })
    }
};



module.exports = {
    createAccount
};