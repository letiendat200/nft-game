const express = require('express');
const cors = require('cors');

const app = express();


const gameRouter = require('./routes/gameRouter');




var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );  
  next();
});


app.use('/api/game', gameRouter);


module.exports = app;
