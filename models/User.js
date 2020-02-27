var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String,
  is_admin : {
    type: Boolean,
    default: false
  }
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');