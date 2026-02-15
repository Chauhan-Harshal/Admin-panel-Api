const express = require('express');
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/postController');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

router.get('/', getPosts);
router.post('/', verifyToken, createPost);
router.put('/:id', verifyToken, updatePost);
router.delete('/:id', verifyToken, deletePost);

module.exports = router;