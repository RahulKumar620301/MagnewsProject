const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {type: String, required: [true, 'First Name Required']},
  lastName: {type: String, required: [true, 'Last Name Required']},
  emailId: {type: String, required: [true, 'Email id Required']},
  phoneNo: {type: String, required: [true, 'Phone No Required']},
  password:{type: String, required: [true, 'Password Required']},
  city:{type: String, default:null},
  dob:{type: String, default:null},
  gender:{type:String, default: null},
  date:{ type: Date, default: Date.now}
});

module.exports = mongoose.model('User',userSchema, 'User'); //schema
//db=projectDb, collection:User