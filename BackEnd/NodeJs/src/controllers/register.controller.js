const register = require("../models/register.model");
const bcrypt = require("bcrypt");
const { generatePassword } = require("../utils/generatePassword");
const { sendMailToUser } = require("../utils/email");
const { generateToken } = require("../middleware/authToken");


const userRegister = async (req, res) => {
    try {

        let { email } = req.body;

        const findEmail = await register.findOne({ email });

        if (findEmail) {
            return res.status(409).json({
                Message: "Email alredy exist.."
            })
        };
        let password = await generatePassword(6);

        console.log("pass", password);


        const hash = await bcrypt.hash(password, 10);

        let data = {
            ...req.body,
            password: hash
        };
        const saveUser = await register.create(data);

        await sendMailToUser(email, password, saveUser.userName);

        res.json({
            data: saveUser
        })

    } catch (error) {
        res.json({
            Message: error
        })
    }
};



const login = async (req, res) => {
    try {
        let { email, password } = req.body;

        const findEmail = await register.findOne({email});

        if (!findEmail) {
            return res.status(404).json({ Message: "Email Not Registred.."})
        };

        const checkpassword = await bcrypt.compare(password, findEmail.password);

        console.log("test", checkpassword);
        if (!checkpassword) {
            return res.status.json({ Message: "Invalid password"})
        };

        const token = await generateToken(findEmail.userId);
        console.log("test", token);
        res.json({
            data: findEmail,
            token: token,
            Message: "Login Successfully..."
        })
        
    } catch (error) {
        res.json({
            Error: error
        })
    }
};



module.exports = {
    userRegister,
    login
};
