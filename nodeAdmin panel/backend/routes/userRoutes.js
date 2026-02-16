const express = require('express');
const { register, login, logout } = require('../controllers/userController');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
//
//Show Password

// mongodb+srv://chauhanharshal382_db_user:R3iKGUnrgCsInk41@cluster01.tqzyqgp.mongodb.net/?appName=Cluster01
// password