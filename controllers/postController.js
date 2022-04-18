const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res)=> {
  const posts = await Post.findMany();
  res.send(posts).status(200);
});

router.get('/:id', async (req, res)=> {

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