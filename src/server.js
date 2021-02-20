const app = require('./app');
const logger = require('./utils/logger');

const apiPort = 3000;

app.listen(apiPort, () => logger.info(`Server running on port ${apiPort}`));
