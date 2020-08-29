var mongoDBURL = require('./src/config/constant');
var express = require('express');
var bodyParser = require(`body-parser`);
var mongoose = require('mongoose');
var logger = require('morgan');
var accountRouter = require('./src/router/auth/auth');
var movieRouter = require('./src/router/movie/movie');
const bcrypt = require("bcrypt");
var appKey = require('./src/config/constant');
var expressSession = require('express-session');
//
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(expressSession({
    name: 'Cinema',
    secure: true,
    httpOnly: true,
    secret: 'C1n3ma',
    resave: false
}));

mongoose.connect(`mongodb://127.0.0.1:27017/CinemaDatabase`, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log(`MongoDB connected`);
}).catch((error) => {
    console.log(`Connection error: ${JSON.stringify(error, null, 2)}`)
});

// var cinemaMovies = [movie];
app.use(`/api/account`, accountRouter);
app.use(`/api/movie`, movieRouter);
app.listen(3000, () => {
    console.log(`The server has started!`);
});
