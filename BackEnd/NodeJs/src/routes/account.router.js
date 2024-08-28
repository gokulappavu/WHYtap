const express = require("express");
const router = express.Router();
const AccountController = require("../controllers/account.controller");
const { verifyToken } = require("../middleware/authToken");


// router.use(verifyToken);

router
.route("/")
.post( verifyToken, AccountController.createAccount);


module.exports = router;