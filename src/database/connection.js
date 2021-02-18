const mongoose = require('mongoose');
const logger = require('../api/utils/logger');
require('dotenv').config();

// mongoose
//   .connect(process.env.DB_STRING, { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
//   })
//   .then((data) => {
//     console.log('Connection successful', data.connection.readyState)
//   })
//   .catch((err) => console.log('Connection failed', err));

const connection = async () => {
  try {
    mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    logger.info('Succesful Database Connection')
  } catch (e) {
    logger.error('Connection failed', e);
  }
}

const close = async () => mongoose.connection.close();

// const database = mongoose.connection;
  
module.exports = { connection, close };