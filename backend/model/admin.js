const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: {type: String, required: [true, 'user Name Required']},
  password: {type: String, required: [true, 'Password Required']},
  
});

module.exports = mongoose.model('Admin',adminSchema, 'Admin'); //schema
//db=projectDb, collection:Admin