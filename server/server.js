const express = require('express');
const userController = require('../controllers/userController');
const genreController = require('../controllers/genreController');
const subreadditController = require('../controllers/subreadditController');
const postController = require('../controllers/postController');

const setupServer = () => {
  const app = express();
  app.use(express.json());

  app.use('/api/users', userController);
  app.use('/api/genres', genreController);
  app.use('/api/r', subreadditController);
  app.use('/api/posts', postController);

  return app;
};

module.exports = { setupServer };
