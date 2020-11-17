const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var sampleController = require('./controllers/sampleController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));


app.use('/api/v1/demo', sampleController);


app.listen(3000, () => console.log('Server started at port : 3000'));