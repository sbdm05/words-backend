const express = require('express');
const router = express.Router();

const {
  getWords,
  getSampleWords,
  updateLike,
  searchWord
} = require('../controllers/words.js');

router.get('', getWords);
router.get('/sample', getSampleWords);
router.patch('/update-like', updateLike);
router.post('/search', searchWord);

module.exports = router;
