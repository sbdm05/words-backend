const { request } = require('express');
require('dotenv').config();
const Data = require('../models/Word');

const getWords = async (req, res) => {
  try {
    // utiliser la méthode Model.find({})
    const words = await Data.find({});
    console.log(words, 'words');
    return res.json({ success: true, words: words });
  } catch (error) {
    console.log('erreur dans get');
    res.status(500).json({ msg: error });
  }
};

// getRandomWord

// search

module.exports = {
  getWords,
};
