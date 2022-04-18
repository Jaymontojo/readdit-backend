const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res)=> {
  const posts = await Post.findMany();
  res.send(posts).status(200);
});

router.get('/:id', async (req, res)=> {
  const { id } = req.params;
  const posts = await Post.findOne(id);
  res.send(posts[0]).status(200);
});

router.post('/', async (req, res) => {
  const { title, contents, user_id, subreaddit_id } = req.body;
  await Post.create(title, contents, user_id, subreaddit_id);
  res.status(201).end();
});

router.patch('/:name', async (req, res) => {
  //WIP
});

router.delete('/:name', async (req, res) => {
  //WIP
});

module.exports = router;