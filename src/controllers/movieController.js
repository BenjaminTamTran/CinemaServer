var Movie = require('../models/Movie');
var Account = require('../models/Account');
var helper = require('../router/helper');

const createMovie = async (req, res) => {
    const image = req.body.type === 'ADD_MOVIE_REQUEST' ? req.body.params.image : req.body.image;
    const name = req.body.type === 'ADD_MOVIE_REQUEST' ? req.body.params.name : req.body.name;
    const description = req.body.type === 'ADD_MOVIE_REQUEST' ? req.body.params.description : req.body.description;
    const showDate= req.body.type === 'ADD_MOVIE_REQUEST' ? req.body.params.showDate : req.body.showDate;
    const userID = req.body.type === 'ADD_MOVIE_REQUEST' ? req.body.params.userID : req.body.userID;
    const type = req.body.type === 'ADD_MOVIE_REQUEST' ? req.body.params.type : req.body.type;
    // get author name
    var author = await Account.findById(userID);
    //
    var id = `${name.replace(' ', '-')}-${Math.floor(Math.random() * 10000)}`;
    var movie = new Movie({
        _id: `${id}`,
        image: image,
        name: name,
        createDate: Date.now(),
        showDate: new Date(showDate).getTime(),
        description: description,
        userID: userID,
        author: author.username,
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
    console.log(`Process - remove the movie have id - ${id}`);
    Movie.findByIdAndRemove(id)
        .exec()
        .then(() =>
            helper.removeMovieSuccess(res)
        ).catch((error) =>
            helper.noMovieFoundError(res, error)
        )
};

const demandDeleteMovie = (req, res) => {
    const id = req.body.id;
    Movie.findOne({_id: id})
        .exec()
        .then(() =>
            helper.demandRemoveMovieSuccess(res, id)
        ).catch((error) =>
            helper.noMovieFoundError(res, error)
        )
};

const getMovieList = async (req, res) => {
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

const getCreatedMovie = async (req, res) => {
    const userID = req.body.userID;
    console.log(`userID: ${userID}`);
    try {
        const movies = await Movie.find({userID: userID});
        if (movies) {
            helper.getUserMovieListSuccess(res, movies);
        } else {
            console.log(`Error while fetching user movies - ${JSON.stringify(error, null, 2)}`);
            helper.noMovieFoundError(res);
        }
    } catch (e) {
        console.log(`Error while get movie list of user - ${JSON.stringify(e.message, null, 2)}`);
        helper.serverError(res);
    }
};

module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
  demandDeleteMovie,
  getMovieList,
  getMovieDetail,
  getSaveMovie,
  getCreatedMovie
};
