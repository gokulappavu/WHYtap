const express = require("express");
const router = express.Router();
const AccountRouter = require("../routes/account.router");
const RegisterRouter = require("../routes/register");


const Routes = [
    {
        path: "/account",
        route: AccountRouter
    },
    {
        path: "/auth",
        route: RegisterRouter
    }
];


Routes.forEach((route) => {
    router.use( route.path, route.route)
});


module.exports = router;

