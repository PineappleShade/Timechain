const express = require('./express');
const logger = require('./helpers/logger');

const port = 3000;

express.then((app) => {
  app.listen(port);
  logger.info(`Started server on port ${port}`);
});