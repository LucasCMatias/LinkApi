const winston = require('winston');
const logs = require('../config/logs');

const logger = new winston.createLogger(logs.winston);

module.exports = logger;
