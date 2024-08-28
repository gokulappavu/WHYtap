const nodemailer = require("nodemailer");



const sendMailToUser = async (email, password, name) => {
    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.PASS_KEY
            }
        });


        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Test Subject",
            text: `Hello ${name}. This is your password: ${password}`
        };

        await transporter.sendMail(mailOptions);

        console.log("Mail send successfully");


    } catch (error) {
        console.log(`Mail Error: ${error}`);

    }
};



module.exports = {
    sendMailToUser
};