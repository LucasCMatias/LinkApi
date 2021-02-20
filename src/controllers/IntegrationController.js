const PipedriveService = require('../services/PipedriveService');
const BlingService = require('../services/BlingService');
const createOrder = require('../helpers/createOrder');
const { saveDeal } = require('../repositories/dealRepository');
const logger = require('../utils/logger');

class integrateOrder {
  async startIntegration(req, res) {
    try {
      let returnData = {
        status: null,
        message: null,
        orders: [],
      };

      const wonOrders = await PipedriveService();

      for (let order of wonOrders) {
        let orderXml = await createOrder(order);

        let blingOrder = await BlingService(orderXml);

        console.log(blingOrder.data.retorno.erros);

        let saveOrder;

        if (blingOrder.status === 200) {
          try {
            saveOrder = await saveDeal(order);
            returnData.orders.push(saveOrder);
          } catch (e) {
            logger.error('An error has occurred saving deal:', e);
            return res.status(500).json(returnData);
          }
        } else {
          returnData = {
            status: 500,
            message: 'An error has occurred in Bling integration',
          };

          return res.status(500).json(returnData);
        }
      }

      returnData.message = 'Integration Successfully';
      returnData.status = 200;

      return res.status(200).json(returnData);
    } catch (e) {
      logger.error('IntegrationController - StartIntegration:', e);
      return res
        .status(500)
        .json('An error has occurred in integration:', e.message);
    }
  }
}

module.exports = new integrateOrder();
