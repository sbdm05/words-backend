const express = require('express');
const app = express();

const wordsRoutes = require('./routes/words');

// nécessaire pour faire des appels
const cors = require("cors");

// require db
const connectDB = require('./db/connect')
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// parse application/json

app.use(cors());

// attention à déclaréer après les méthodes .json et urlencoded
app.use('/api/v1/words', wordsRoutes);

// adresse à utiliser en local =>  localhost:4000
const port = process.env.PORT || 4000;
if(typeof process.env.MONGO_URI === 'string'){
  console.log('string', process.env.MONGO_URI);
}else{
  console.log('echec');
}

const start = async () => {
  if (typeof process.env.MONGO_URI === 'string') {
   try {
     await connectDB(process.env.MONGO_URI);
     app.listen(port, () => console.log(`app listening on port ${port}`));
   } catch (error) {
     console.log(error);
   }
  } else {
    console.log('echec');
  }
  
};

start();