const express = require('express');
const router = express.Router();
const Genre = require('../models/Genre');

router.get('/', async (req, res)=> {
  const genres = await Genre.findMany();
  res.send(genres)
    .status(200);
});

router.get('/:name', async (req, res)=> {
  //WIP
});

router.post('/', (req, res) => {
  const { name } = req.body;
  Genre.create(name);
  res.status(201).end();
});

router.patch('/:name', (req, res) => {
  //WIP
});

router.delete('/:name', (req, res) => {
  //WIP
});

module.exports = router;