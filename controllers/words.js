const { request } = require('express');
require('dotenv').config();
const Data = require('../models/Word');

const getWords = async (req, res) => {
  // res.send('OK')
  try {
    // utiliser la méthode Model.find({})
    const words = await Data.findOne({meaning:
'Bière de la marque 1664.'});
    console.log(words);
    return res.json({ success: true, words: words });
  } catch (error) {
    console.log('erreur dans get');
    res.status(500).json({ msg: error });
  }
};

const getSampleWords = async(req, res)=>{
  Data.aggregate([{ $sample: { size: 100 } }])
    .then((result) => {
      console.log(result);
      res.json({success: true, nberOfItems:result.length, data: result})
    })
    .catch((err) => {
      console.log(err);
    });
}

// getRandomWord

// search

module.exports = {
  getWords,
  getSampleWords
};


// error 504 sur vercel => solution, limiter le nombre de documents demandés