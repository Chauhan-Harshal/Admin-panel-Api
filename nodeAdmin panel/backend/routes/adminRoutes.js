const express = require('express');
const { getUsers, deleteUser } = require('../controllers/userController');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

router.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to admin dashboard', user: req.user });
});

router.get('/users', verifyToken, getUsers);
router.delete('/users/:id', verifyToken, deleteUser);

module.exports = router;