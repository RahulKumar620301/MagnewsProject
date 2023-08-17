const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  title: {type: String, required: [true, 'Title Required']},
  image: {type: String, required: [true, 'Image Required']},
  
});

module.exports = mongoose.model('Category',categorySchema, 'Category'); //schema
//db=projectDb, collection:Article