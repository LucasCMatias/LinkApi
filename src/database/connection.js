const mongoose = require('mongoose');
const logger = require('../api/utils/logger');
require('dotenv').config();

mongoose
  .connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    logger.info('Database connection successfull', data.connection.readyState);
  })
  .catch((err) => logger.erro('Database connection failed', err));

const database = mongoose.connection;

module.exports = database;
