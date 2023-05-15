const mongoose = require('mongoose');

// on crée la structure de Todo
const WordSchema = new mongoose.Schema({
  
  // key/value pair
  french: {
    type: String,
  },
  meaning: {
    type: String,
  },
  english: {
    type: String,
  },
  english__1: {
    type: String,
  },
  syn_: {
    type: String,
  },
  etym: {
    type: String,
  },
  mobile_share: {
    type: String,
  },
  likes: {
    type: Number,
  },
  isLiked: {
    type: Boolean,
  },
  isSaved: {
    type: Boolean,
  },
});
WordSchema.index({ french: 'text' });

module.exports = mongoose.model('Data', WordSchema);
