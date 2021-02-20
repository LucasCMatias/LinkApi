const IntegrationController = require('../controllers/IntegrationController');
const routes = require('express').Router();

routes.get('/integration', IntegrationController.startIntegration);

module.exports = routes;
