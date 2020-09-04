var Movie = require('../models/Movie');
var helper = require('../router/helper');

const createMovie = async (req, res) => {
    // var imageName = req.files.image.originalFilename ? stringHelper.removeWeirdCharacter(req.files.image.originalFilename) : 'your_movie.png';
    var movie = new Movie({
        // imagePath: req.files.image.path ? req.files.image.path : 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
        image: req.body.image,
        name: req.body.name,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        description: req.body.description,
        userID: req.body.userID ? req.body.userID : '',
        type: req.body.type ? req.body.type : '',
    });
    try {
        if (await Movie.findOne({name: movie.name})) {
            helper.duplicatedMovieError(res);
        } else {
            return movie.save().then((movieCreated) => {
                helper.createMovieSuccess(res, movieCreated)
            })
        }
    } catch (error) {
        console.log(`Create movie error: ${JSON.stringify(error, null, 2)}`);
        helper.serverError(res)
    }
    // kiểm tra session, token của người tạo trước rồi mới tiến hành lưu item vào mongodb.

};

const updateMovie = (req, res) => {
    const id = req.params.id;
    console.log(id);
    const updateObject = req.body;
    Movie.updateOne({ _id: id }, { $set: updateObject })
        .exec().then(() => {
            Movie.findById(id).then((updatedMovie) => {
                helper.updateMovieSuccess(res, updatedMovie);
            })
    }).catch((error) => {
        console.log(`update movie error: ${JSON.stringify(error, null, 2)}`);
        helper.serverError(res)
    })
};

const deleteMovie = (req, res) => {
    const id = req.params.id;
    Movie.findByIdAndRemove(id)
        .exec()
        .then(() =>
            helper.removeMovieSuccess(res)
        ).catch((error) =>
            helper.noMovieFoundError(res, error)
        )
};

const getListMovie = async (req, res) => {
    const movies = await Movie.find();
    if (movies) {
        helper.getMovieList(res, movies);
    } else {
        helper.noMovieFoundError(res);
    }
};

const getMovieDetail = (req, res) => {
    const id = req.params.id;
    Movie.findById(id).then((movie) => {
        helper.getMovieDetail(res, movie)
    }).catch((error) => {
        helper.movieNotFound(res, error)
    })
};

const getSaveMovie = (req, res) => {

};

const getCreatedMovie = (req, res) => {

};

module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
  getListMovie,
  getMovieDetail,
  getSaveMovie,
  getCreatedMovie
};
