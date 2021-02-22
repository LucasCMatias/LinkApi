const IntegrationController = require('../controllers/IntegrationController');
const OrderController = require('../controllers/DealController');
const routes = require('express').Router();

routes.get('/integration', IntegrationController.startIntegration);
routes.get('/pipedrive-deals', OrderController.getDealsByPipedrive);
routes.get('/deals', OrderController.getDeals);
routes.get('/total-deals', OrderController.getTotalDeals);

module.exports = routes;
