const mongoose = require('mongoose');


const articleSchema = new mongoose.Schema({
  title: {type: String, required: [true, 'Title Required']},
  image: {type: String, required: [true, 'Image Required']},
  content: {type: String, required: [true, 'Content Required']},
  userId: {type: String, required: [true, 'Userid Required']},
  category: {type: String, required: [true, 'Category Required']},
  
  status:{type: String, default:'Saved'},

  date:{ type: Date, default: Date.now}
});

module.exports = mongoose.model('Article',articleSchema, 'Article'); //schema
//db=projectDb, collection:Article