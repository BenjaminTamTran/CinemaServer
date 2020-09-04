var mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    // imagePath: {
    //     type: String,
    //     default: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
    //     require: true
    // },
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
        type: Number,
        default: Date.now(),
        require: true
    },
    createDate: {
        type: Number,
        default: Date.now(),
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
    type: {
        type: String,
        default: null,
        require: false
    }
});

module.exports = mongoose.model('movie', movieSchema);
