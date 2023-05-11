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
  syn: {
    type: String,
  },
  etym: {
    type: String,
  },
  english: {
    type: Number,
  },
  mobile_share: {
    type: String,
  },
});

module.exports = mongoose.model('Data', WordSchema);
