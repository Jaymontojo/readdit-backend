const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res)=> {
  const users = await User.findMany();
  res.send(users)
    .status(200);
});

router.get('/:name', async (req, res)=> {
  const { name } = req.params;
  const users = await User.findOne(name);
  res.send(users[0]).status(200);
});

router.post('/', async (req, res) => {
  const {name, password} = req.body;
  await User.create(name, password);
  res.status(201).end();
});

router.patch('/:name', async (req, res) => {
  const { name } = req.params;
  const edits = req.body;
  await User.update(name, edits);
  res.status(204).end();
});

router.delete('/:name', async (req, res) => {
  const { name } = req.params;
  await User.delete(name);
  res.status(204).end();
});

module.exports = router;