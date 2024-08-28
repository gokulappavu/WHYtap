const generatePassword = (length) => {
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !#$@%&()+-*/.,=[]{}^|"

let password = "";
for (let index = 0; index < length; index++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length))
};

return password;
};


module.exports = {
    generatePassword
}