const express = require('express');
const User = require('../controlllers/User');

const setupServer = () => {
  const app = express();

  app.use(express.json());

  // app.use("/", (req, res) => {
  //   res.send("welcome!")
  //     .status(200);
  // });

  app.get('/api/users', async (req, res)=> {
    const users = await User.findMany();
    res.send(users)
      .status(200);
  });

  app.get('/api/users/:name', async (req, res)=> {
    const {name} = req.params;
    const user = await User.findOne(name);
    res.send(user[0]).status(200);
  });

  app.post('/api/users', (req, res) => {
    const {username, password} = req.body;
    User.create(username, password);
    res.status(201).end();
  });

  app.patch('/api/users/:name', (req, res) => {
    const { name } = req.params;
    const edits = req.body;
    User.update(name, edits);
    res.status(204).end();
  });

  app.delete('/api/users/:name', (req, res) => {
    const { name } = req.params;
    User.delete(name);
    res.status(204).end();
  });

  return app;
};

module.exports = { setupServer };
