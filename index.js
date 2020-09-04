var mongoDBURL = require('./src/config/constant');
var express = require('express');
var bodyParser = require(`body-parser`);
var mongoose = require('mongoose');
var logger = require('morgan');
var cors = require('cors');
var authRouter = require('./src/router/auth/auth');
var movieRouter = require('./src/router/movie/movie');
const bcrypt = require("bcrypt");
var appKey = require('./src/config/constant');
var expressSession = require('express-session');
//
const app = express();
app.use(cors());
app.use( bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit:50000
}));
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
app.use(`/api/account`, authRouter);
app.use(`/api/movie`, movieRouter);
app.listen(3001, () => {
    console.log(`The server has started!`);
});
