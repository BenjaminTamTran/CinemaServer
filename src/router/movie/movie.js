var express = require('express');
var movieController = require('../../controllers/movieController');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

const router = express.Router();
router.post(`/createMovie`, multipartMiddleware, movieController.createMovie);
router.put(`/editMovie/:id`, multipartMiddleware, movieController.updateMovie);
router.delete(`/:id`, movieController.deleteMovie);
router.get(`/getAllMovies`, movieController.getListMovie);
router.get(`/:id`, movieController.getMovieDetail);
router.get(`/getSavedMovies/`, movieController.getSaveMovie);
router.get(`/getCreatedMovies/`, movieController.getCreatedMovie);

module.exports = router;
