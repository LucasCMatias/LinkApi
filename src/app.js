const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./database/connection');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

module.exports = app;
