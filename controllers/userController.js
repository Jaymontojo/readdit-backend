const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res)=> {
  const users = await User.findMany();
  res.send(users)
    .status(200);
});

router.get('/:name', async (req, res)=> {
  const {name} = req.params;
  const user = await User.findOne(name);
  res.send(user[0]).status(200);
});

router.post('/', (req, res) => {
  const {username, password} = req.body;
  User.create(username, password);
  res.status(201).end();
});

router.patch('/:name', (req, res) => {
  const { name } = req.params;
  const edits = req.body;
  User.update(name, edits);
  res.status(204).end();
});

router.delete('/:name', (req, res) => {
  const { name } = req.params;
  User.delete(name);
  res.status(204).end();
});

module.exports = router;