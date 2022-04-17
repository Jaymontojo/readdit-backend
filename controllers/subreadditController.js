const express = require('express');
const router = express.Router();
const Subreaddit = require('../models/Subreaddit');

router.get('/', async (req, res)=> {
  const subreaddits = await Subreaddit.findMany();
  res.send(subreaddits)
    .status(200);
});

router.get('/:name', async (req, res)=> {
  //WIP
});

router.post('/', (req, res) => {
  const { name, genre_id } = req.body;
  Subreaddit.create(name, genre_id);
  res.status(201).end();

  //should check if that genre ID exists in the database?
});

router.patch('/:name', (req, res) => {
  //WIP
});

router.delete('/:name', (req, res) => {
  //WIP
});

module.exports = router;