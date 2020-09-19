var express = require('express');
var accountController = require('../../controllers/accountController');
var helper = require('../helper');

const router = express.Router();

router.post('/profile', async function (req, res) {
    if (!req.headers.token)
        helper.unauthorizedError(res);
    else
        await accountController.getUserInf(req, res);
});

router.post('/profile/update', async function (req, res) {
    if (!req.headers.token)
        helper.unauthorizedError(res);
    else
        await accountController.updateInformation(req, res);
});

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

router.post(`/profile/auth/update`, async function (req, res) {
    if (!req.headers.token)
        helper.unauthorizedError(res);
    else if (!req.body.newPassword || req.body.newPassword === "")
        helper.notFoundDataError(res);
    else
        await accountController.changePassword(req, res)
});

router.post(`/profile/auth/verify`, async function (req, res) {
    if (!req.body.email || req.body.enail === "")
        helper.notFoundDataError(res);
    else
        await accountController.checkEmailExist(req, res)
});

router.post(`/profile/auth/reset`, async function (req, res) {
    if (!req.body.email || req.body.enail === "")
        helper.notFoundDataError(res);
    if (!req.body.newPassword || req.body.newPassword === "")
        helper.notFoundDataError(res);
    else
        await accountController.resetPassWord(req, res)
});

module.exports = router;
