const { request } = require('express');
require('dotenv').config();

const getWords = async (req, res)=>{
      const { body } = req;
      console.log(body, 'body');
      res.send('test')
}


module.exports = {
  getWords
};