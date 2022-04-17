const express = require('express');
const userController = require('../controllers/userController');
const genreController = require('../controllers/genreController');

const setupServer = () => {
  const app = express();
  app.use(express.json());

  app.use('/api/users', userController);
  app.use('/api/genres', genreController);

  return app;
};

module.exports = { setupServer };
