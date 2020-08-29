var Account = require('../models/Account');
const bcrypt = require("bcrypt");
var jsonwebtoken = require('jsonwebtoken');
var constant = require('../config/constant');

const createAccount = async (req, res) => {
    var account = new Account({
        // _id: mongoose.Types.ObjectId,
        email: req.body.email ? `${req.body.email}`.trim().toLowerCase() : 'defaultEmail@yopmail.com',
        password: req.body.password
    });

    await bcrypt.hash(account.password, 3).then((hash) => {
        account.password = hash
    });

    if (await Account.findOne({email: account.email})) {
        return res.status(200).json({
            success: true,
            message: 'Email này đã sử dụng',
            Account: {}
        })
    } else {
        return account.save().then((newAccount) => {
            jsonwebtoken.sign({email: account.email}, constant.appKey, { expiresIn: '2 days' }, (error, token) => {
                if (error) throw error;
                req.session.token = token;
                req.session.user = account;
                return res.status(201).json({
                    success: true,
                    message: 'Tài khoản đăng ký thành công',
                    data: {
                        token: token,
                        Account: newAccount
                    }
                })
            });
        }).catch((error) => {
            console.log(`Create account error: ${JSON.stringify(error, null, 2)}`);
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again',
                error: error.message
            })
        })
    }
};

const signin = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    var userAccount = await Account.findOne({email: email}).lean();
    if (userAccount) {
        const match = await bcrypt.compare(password, userAccount.password);
        if (match) {
            jsonwebtoken.sign({email: email}, constant.appKey, { expiresIn: '2 days' }, (error, token) => {
                if (error) throw error;
                delete userAccount.password;
                req.session.user = userAccount;
                req.session.token = token;
                res.status(200).json({
                    success: true,
                    message: 'Đăng nhập tài khoản thành công',
                    data: {
                        token: token,
                        Account: userAccount
                    }
                })
            });
        } else {
            res.status(403).json({
                success: false,
                message: 'Đăng nhập không thành công',
                error: 'Mật khẩu không chính xác'
            })
        }
    } else {
        res.status(404).json({
            success: false,
            message: 'Không tìm thấy tài khoản đăng nhập',
            error: 'Email không có sẵn'
        })
    }
};

module.exports = {
    createAccount,
    signin
};

