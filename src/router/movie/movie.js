var express = require('express');
var movieController = require('../../controllers/movieController');
// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart();
var helper = require('../helper');
var constant = require('../../config/constant');
const router = express.Router();

router.get(`/`, movieController.getMovieList); // lấy danh sách các bộ phim

router.get(`/:id`, movieController.getMovieDetail); // lấy thông tin chi tiết của bộ phim thông qua param url

router.get(`/list/saved`, movieController.getSaveMovie); // lấy danh sách các bộ phim đã lưu của user

// lấy danh sách các bộ phim đã tạo của user
router.post(`/list/created/`, async function (req, res) {
    const token = req.headers.token;
    const userID = req.body.userID;
    if (!token) helper.unauthorizedError(res);
    if (!userID) helper.unauthorizedError(res);
    await movieController.getCreatedMovie(req, res);
});

// Thêm một phim mới
router.post(`/create`, async function (req, res) {
    // Because of redux-saga so if req wasnt from postman, it will have the 'type' field

    const image = req.body.type === 'ADD_MOVIE_REQUEST' ? req.body.params.image : req.body.image;
    const name = req.body.type === 'ADD_MOVIE_REQUEST' ? req.body.params.name : req.body.name;
    const description = req.body.type === 'ADD_MOVIE_REQUEST' ? req.body.params.description : req.body.description;

    if (!image || image === '' || image === constant.imagePlaceholder)
        helper.imageNotFoundError(res);
    else if (!name || name === '')
        helper.titleNotFoundError(res);
    else if (!description || description === '')
        helper.descriptionNotFoundError(res);
    else if (!req.headers.token)
        helper.unauthorizedError(res);
    else if (image && image !== '' && image !== constant.imagePlaceholder
                && name && name !== ""
                && description && description !== ""
                && req.headers.token)
        await movieController.createMovie(req, res);
});

// gửi yêu cầu xóa một bộ phim
router.post(`/remove`, async function (req, res) {
    if (!req.headers.token)
        helper.unauthorizedError(res);
    else if (req.headers.token)
        await movieController.demandDeleteMovie(req, res)
});

// cập nhật lại thông tin phim
router.put(`/:id/update`, async function (req, res) {
    if (!req.headers.token)
        helper.unauthorizedError(res);
    else if (req.headers.token)
        await movieController.updateMovie(req, res)
});

// xóa một bộ phim
router.delete(`/:id/delete`, async function (req, res) {
    if (!req.headers.token)
        helper.unauthorizedError(res);
    else if (req.headers.token)
        await movieController.deleteMovie(req, res)
});

module.exports = router;
