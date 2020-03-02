var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: String,
  password: String,
  isAdmin : {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  },
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');