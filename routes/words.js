const express = require('express');
const router = express.Router();

const { getWords } = require('../controllers/words.js');
const { getSampleWords } = require('../controllers/words.js');


router.get('', getWords);
router.get('/sample', getSampleWords);


module.exports = router;
