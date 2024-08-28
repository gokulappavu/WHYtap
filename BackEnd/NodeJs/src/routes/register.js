const express = require("express");
const router = express.Router();
const registerController = require("../controllers/register.controller");


router
.route("/register")
.post( registerController.userRegister );


router
.route("/login")
.post( registerController.login );


module.exports = router;