const mongoose = require('mongoose');


const connectDB = (url) => {
  console.log(typeof url, 'url')
  return mongoose
    .connect(url)
    .then(() => console.log('connecté à mongodb'))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
