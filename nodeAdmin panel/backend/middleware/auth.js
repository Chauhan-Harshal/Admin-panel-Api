const jwt = require('jsonwebtoken');
require('dotenv').config();

// Verify JWT token
const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1] || req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided' });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET || 'secretkey');
    req.user = verified;
    req.userId = verified.id;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Verify if user is verified
const verifyUserStatus = async (req, res, next) => {
  try {
    const User = require('../models/User');
    const user = await User.findById(req.userId);

    if (!user.isVerified) {
      return res.status(403).json({ message: 'Please verify your email first' });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { verifyToken, verifyUserStatus };