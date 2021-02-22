const PipedriveService = require('../services/PipedriveService');
const TotalDeals = require('../models/TotalDeals');
const Deal = require('../models/Deal');
const logger = require('../utils/logger');

module.exports = {
  async getDealsByPipedrive(req, res) {
    try {
      const wonOrders = await PipedriveService();

      return res.status(200).json(wonOrders);
    } catch (e) {
      logger.error('OrderController - getDealsByPipedrive:', e);
      return res
        .status(500)
        .json('An error has occurred getting deals:', e.message);
    }
  },
  async getDeals(req, res) {
    try {
      const deals = await Deal.find();

      return res.status(200).json(deals);
    } catch (e) {
      logger.error('OrderController - getDeals:', e);
      return res
        .status(500)
        .json('An error has occurred getting deals:', e.message);
    }
  },
  async getTotalDeals(req, res) {
    try {
      const totalOrders = await TotalDeals.find();

      return res.status(200).json(totalOrders);
    } catch (e) {
      logger.error('OrderController - getTotalDeals:', e);
      return res
        .status(500)
        .json('An error has occurred getting total deals:', e.message);
    }
  },
};
