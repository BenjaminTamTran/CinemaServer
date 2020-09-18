var mongoose = require('mongoose');
var moment = require('moment');

const movieSchema = new mongoose.Schema({
    // imagePath: {
    //     type: String,
    //     default: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
    //     require: true
    // },
    _id: {
        type: String,
        default: `${Math.floor(Math.random() * 1000)}`,
        require: true
    },
    image: {
        type: String,
        default: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
        require: true
    },
    name: {
        type: String,
        default: 'Cinema movie',
        require: true
    },
    showDate: {
        type: String,
        default: moment(Date.now()).toDate().toDateString(),
        require: true
    },
    createDate: {
        type: String,
        default: moment(Date.now()).toDate().toDateString(),
        require: true
    },
    description: {
        type: String,
        default: '',
        require: true
    },
    userID: {
        type: String,
        default: null,
        require: false
    },
    author: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: null,
        require: false
    }
});

movieSchema.index({ "$**": "text" });

module.exports = mongoose.model('movie', movieSchema);
