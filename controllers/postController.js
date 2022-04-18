const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res)=> {
  const posts = await Post.findMany();
  res.send(posts)
    .status(200);
});

router.get('/:name', async (req, res)=> {
  //WIP
});

router.post('/', async (req, res) => {
  //WIP
});

router.patch('/:name', async (req, res) => {
  //WIP
});

router.delete('/:name', async (req, res) => {
  //WIP
});

module.exports = router;