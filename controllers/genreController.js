const express = require('express');
const router = express.Router();
const Genre = require('../models/Genre');

router.get('/', async (req, res)=> {
  const genres = await Genre.findMany();
  res.send(genres)
    .status(200);
});

router.get('/:name', async (req, res)=> {
  const { name } = req.params;
  const genres = await Genre.findOne(name);
  res.send(genres[0]).status(200);
});

router.post('/', async (req, res) => {
  const { name } = req.body;
  await Genre.create(name);
  res.status(201).end();
});

router.patch('/:name', async (req, res) => {
  const { name } = req.params;
  const edits = req.body;
  await Genre.update(name, edits);
  res.status(204).end();
});

router.delete('/:name', async (req, res) => {
  const { name } = req.params;
  await Genre.delete(name);
  res.status(204).end();
});

module.exports = router;