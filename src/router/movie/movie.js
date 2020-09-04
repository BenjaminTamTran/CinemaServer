var express = require('express');
var movieController = require('../../controllers/movieController');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var helper = require('../helper');
var constant = require('../../config/constant');

const router = express.Router();
router.get(`/`, movieController.getListMovie); // lấy danh sách các bộ phim
router.get(`/:id`, movieController.getMovieDetail); // lấy thông tin chi tiết của bộ phim
router.get(`/list/saved`, movieController.getSaveMovie); // lấy danh sách các bộ phim đã lưu của user
router.get(`/list/created/`, movieController.getCreatedMovie); // lấy danh sách các bộ phim đã tạo của user

// Thêm một phim mới
router.post(`/create`, async function (req, res) {
    if (!req.body.image || req.body.image === '' || req.body.image === constant.imagePlaceholder)
        helper.imageNotFoundError(res);
    else if (!req.body.name || req.body.name === '')
        helper.titleNotFoundError(res);
    else if (!req.body.description || req.body.description === '')
        helper.descriptionNotFoundError(res);
    else if (!req.headers.token)
        helper.unauthorizedError(res);
    else if (req.body.image && req.body.image !== '' && req.body.image !== constant.imagePlaceholder
                && req.body.name && req.body.name !== ""
                && req.body.description && req.body.description !== ""
                && req.headers.token)
        await movieController.createMovie(req, res);
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
