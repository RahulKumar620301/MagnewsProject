const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {type: String, required: [true, 'First Name Required']},
  lastName: {type: String, required: [true, 'Last Name Required']},
  emailId: {type: String, required: [true, 'Email id Required']},
  phoneNo: {type: String, required: [true, 'Phone No Required']},
  message:{type: String, required: [true, 'Message Required']},
  date:{ type: Date, default: Date.now}
});

module.exports = mongoose.model('Contact',contactSchema, 'Contact'); //schema
//db=projectDb, collection:Article