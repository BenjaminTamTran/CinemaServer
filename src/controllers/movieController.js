var Movie = require('../models/Movie');
var helper = require('../router/helper');

const createMovie = async (req, res) => {
    const image = req.body.type === 'ADD_MOVIE_REQUEST' ? req.body.params.image : req.body.image;
    const name = req.body.type === 'ADD_MOVIE_REQUEST' ? req.body.params.name : req.body.name;
    const description = req.body.type === 'ADD_MOVIE_REQUEST' ? req.body.params.description : req.body.description;
    const startDate = req.body.type === 'ADD_MOVIE_REQUEST' ? req.body.params.startDate : req.body.startDate;
    const endDate = req.body.type === 'ADD_MOVIE_REQUEST' ? req.body.params.endDate : req.body.endDate;
    const userID = req.body.type === 'ADD_MOVIE_REQUEST' ? req.body.params.userID : req.body.userID;
    const type = req.body.type === 'ADD_MOVIE_REQUEST' ? req.body.params.type : req.body.type;
    var movie = new Movie({
        image: image,
        name: name,
        startDate: startDate,
        endDate: endDate,
        description: description,
        userID: userID,
        type: type,
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
