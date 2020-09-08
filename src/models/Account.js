var mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
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
