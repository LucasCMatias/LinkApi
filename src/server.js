const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./database/connection');
const logger = require('./api/utils/logger');
const app = express();

const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(apiPort, () => logger.info(`Server running on port ${apiPort}`));

module.exports = app;