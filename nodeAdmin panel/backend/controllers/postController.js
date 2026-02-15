const Post = require('../models/Post');

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = new Post({ title, content, author: req.user.id });
    await post.save();
    res.json({ message: 'Post created', post });
  } catch (err) {
    res.status(500).json({ message: 'Error creating post' });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post || post.author.toString() !== req.user.id) return res.status(403).json({ message: 'Forbidden' });
    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    await post.save();
    res.json({ message: 'Post updated', post });
  } catch (err) {
    res.status(500).json({ message: 'Error updating post' });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post || post.author.toString() !== req.user.id) return res.status(403).json({ message: 'Forbidden' });
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting post' });
  }
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};