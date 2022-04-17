const express = require('express');
const router = express.Router();
const Subreaddit = require('../models/Subreaddit');

router.get('/', async (req, res)=> {
  const subreaddits = await Subreaddit.findMany();
  res.send(subreaddits)
    .status(200);

  //should be able to handle filters by maybe popularity / genre or limits
});

router.get('/:name', async (req, res)=> {
  const { name } = req.params;
  const subreaddits = await Subreaddit.findOne(name);
  res.send(subreaddits[0]).status(200);
});

router.post('/', async (req, res) => {
  const { name, genre_id } = req.body;
  await Subreaddit.create(name, genre_id);
  res.status(201).end();

  //should check if that genre ID exists in the database?
});

router.patch('/:name', async (req, res) => {
  const { name } = req.params;
  const edits = req.body;
  await Subreaddit.update(name, edits);
  res.status(204).end();
});

router.delete('/:name', async (req, res) => {
  const { name } = req.params;
  await Subreaddit.delete(name);
  res.status(204).end();
});

module.exports = router;