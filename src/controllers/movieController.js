var Movie = require('../models/Movie');
var stringHelper = require('../shared/stringHelper');

const createMovie = async (req, res) => {
    var imageName = req.files.image.originalFilename ? stringHelper.removeWeirdCharacter(req.files.image.originalFilename) : 'your_movie.png';
    var movie = new Movie({
        imagePath: req.files.image.path ? req.files.image.path : 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
        imageName: imageName,
        title: req.body.title ? req.body.title : '',
        startDate: req.body.startDate ? req.body.startDate : Date.now,
        endDate: req.body.startDate ? req.body.endDate : Date.now(),
        description: req.body.description ? req.body.description : '',
        userID: req.body.userID ? req.body.userID : ''
    });
    var token = req.headers.token;
    if (token) {
        if (req.session.user._id === movie.userID) {
            if (await Movie.findOne({title: movie.title})) {
                return res.status(200).json({
                    success: true,
                    message: 'Phim này đã có sẵn',
                    data: {}
                })
            } else {
                return movie.save().then((movieCreated) => {
                    return res.status(200).json({
                        success: true,
                        message: 'Tạo phim thành công',
                        data: {
                            Movie: movieCreated
                        }
                    })
                }).catch((error) => {
                    console.log(`Create movie error: ${JSON.stringify(error, null, 2)}`);
                    return res.status(500).json({
                        success: false,
                        message: 'Server error. Please try again!',
                        error: error.message
                    })
                })
            }
        }
    } else {
        return res.status(403).json({
            success: false,
            message: 'Không thể tạo phim',
            error: "Cần đăng nhập để tiếp tục"
        })
    }
    // kiểm tra session, token của người tạo trước rồi mới tiến hành lưu item vào mongodb.

};

const updateMovie = (req, res) => {

};

const deleteMovie = (req, res) => {

};

const getListMovie = (req, res) => {

};

const getMovieDetail = (req, res) => {

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
