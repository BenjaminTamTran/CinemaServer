var express = require('express');
var accountController = require('../../controllers/accountController');

const router = express.Router();
router.post(`/create`, accountController.createAccount);
router.post(`/signin`, accountController.signin);

module.exports = router;
