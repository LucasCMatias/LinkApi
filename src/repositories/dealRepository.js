const Deal = require('../models/Deal');
const TotalDeals = require('../models/TotalDeals');
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
      logger.error('saveDeal - An error has occurred saving deal:', e);
      return e.message;
    }
  },
  async saveTotalDeals(orders) {
    try {
      let total_value = 0;

      for (let order of orders) {
        total_value += order.value;
      }

      const totalDeals = await TotalDeals.create({
        id: mongoose.Types.ObjectId(),
        total_value: total_value,
        date: new Date(),
      });

      return totalDeals;
    } catch (e) {
      logger.error('saveTotalDeals - An error has occurred saving deal:', e);
      return e.message;
    }
  },
};
