const express = require('express');
const router = express.Router();

const {
  getWords,
  getSampleWords,
  updateLike,
} = require('../controllers/words.js');

router.get('', getWords);
router.get('/sample', getSampleWords);
router.patch('/update-like', updateLike);

module.exports = router;
