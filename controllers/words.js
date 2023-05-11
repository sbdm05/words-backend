const { request } = require('express');
require('dotenv').config();
const Word = require('../models/Word');

const getWords = async (req, res)=>{
  const { body } = req;
  console.log(body, 'body');
  //res.send('test')



    try {
      // utiliser la méthode Model.find({})
      const words = await Word.find({});

      return res.json({ success: true, words: words });
    } catch (error) {
      console.log('erreur dans get');
      res.status(500).json({ msg: error });
    }
  }



module.exports = {
  getWords
};