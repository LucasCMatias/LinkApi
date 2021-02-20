const Deal = require('../models/Deal');
var mongoose = require('mongoose');
const logger = require('../utils/logger');

module.exports = {
  async saveDeal(order) {
    try {
      const deal = await Deal.create({
        id: mongoose.Types.ObjectId(),
        title: order.title,
        organization: order.title,
        volumes: {
          service: 'SEDEX - CONTRATO',
          tracking: 'RX32084021',
        },
        value: order.value,
      });

      return deal;
    } catch (e) {
      logger.error('An error has occurred saving deal:', e);
      return e.message;
    }
  },
};
