const { request } = require('express');
require('dotenv').config();
const Data = require('../models/Word');

const getWords = async (req, res) => {
  // res.send('OK')
  try {
    // utiliser la méthode Model.find({})
    const words = await Data.findOne({ meaning: 'Bière de la marque 1664.' });
    console.log(words);
    return res.json({ success: true, words: words });
  } catch (error) {
    console.log('erreur dans get');
    res.status(500).json({ msg: error });
  }
};

const getSampleWords = async (req, res) => {
  Data.aggregate([{ $sample: { size: 100 } }])
    .then((result) => {
      console.log(result);
      res.json({ success: true, nberOfItems: result.length, data: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateLike = async (req, res) => {
  // retrouver l'obj concerné
  // mettre à jour la valeur du like
  try {
    // on récupère la propriété _id
    const { _id } = req.body;
    console.log(req.body);
    // on recherche l'objet concerné
    const word = await Data.findOneAndUpdate({ _id: _id }, req.body, {
      new: true,
      runValidators: true,
    });

    // gérer si pas de word
    if (!word) {
      return res.status(400).json({ msg: 'pas de mot avec cette id' });
    }
    res.json({ success: true, msg: word });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// getRandomWord

// search
const searchWord = async (req, res) => {
  try {
    const { inputToSearch } = req.body;
    console.log(inputToSearch);

    const words = await Data.find({ $text: { $search: inputToSearch } });
    if (words.length > 0) {
      console.log(`${words.length} words found`);
      console.log(words);
      res.json({ success: true, msg: words });
    } else {
      console.log('No words found');
      res.json({ success: true, msg: 'No words were found' });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getWords,
  getSampleWords,
  updateLike,
  searchWord,
};

// error 504 sur vercel => solution, limiter le nombre de documents demandés
