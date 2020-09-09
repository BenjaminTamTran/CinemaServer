var mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
   username: {
     type: String,
     default: '',
     require: false
   },
   avatar: {
     type: String,
     default: '',
     require: false
   },
   email: {
       type: String,
       default: '',
       require: true
   },
   password: {
       type: String,
       default: '',
       require: true
   }
});

module.exports = mongoose.model('accounts', accountSchema);
