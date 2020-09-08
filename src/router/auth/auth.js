var express = require('express');
var accountController = require('../../controllers/accountController');
var helper = require('../helper');

const router = express.Router();

router.post(`/create`, async function (req, res) {
    if (!req.body.email || req.body.email === "")
        helper.notFoundEmailError(res);
    else
        await accountController.createAccount(req, res)
        // next(createAccount)
});

router.post(`/signin`, async function (req, res) {
    if (!req.body.email || req.body.email === "")
        helper.notFoundEmailError(res);
    else
        await accountController.signin(req, res)
});

module.exports = router;
