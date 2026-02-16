const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { generateOTP, getOTPExpiry } = require('../utils/generateOTP');
const { validateSignupData, validateOTP } = require('../utils/validators');
const { sendOTPEmail, sendWelcomeEmail } = require('../services/emailService');

// Generate JWT token
const generateToken = (userId, email) => {
  return jwt.sign(
    { id: userId, email: email },
    process.env.JWT_SECRET || 'secretkey',
    { expiresIn: '1d' }
  );
};

// Signup controller
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    const validation = validateSignupData({ name, email, password });
    if (!validation.isValid) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: validation.errors,
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Generate OTP
    const otp = generateOTP();
    const otpExpiry = getOTPExpiry();

    // Create new user
    const user = new User({
      name,
      email,
      password,
      otp,
      otpExpires: otpExpiry,
      isVerified: false,
    });

    await user.save();

    // Send OTP email
    const emailResult = await sendOTPEmail(email, otp);

    if (!emailResult.success) {
      // Delete user if email sending failed
      await User.findByIdAndDelete(user._id);
      return res.status(500).json({
        message: 'Failed to send OTP email. Please try again.',
      });
    }

    res.status(201).json({
      message: 'Signup successful! OTP sent to your email',
      userId: user._id,
      email: user.email,
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Verify OTP controller
const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Validate OTP format
    if (!validateOTP(otp)) {
      return res.status(400).json({ message: 'Invalid OTP format' });
    }

    // Find user
    const user = await User.findOne({ email }).select('+otp +otpExpires +otpAttempts');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if user is already verified
    if (user.isVerified) {
      return res.status(400).json({ message: 'User already verified' });
    }

    // Check OTP attempts
    if (user.otpAttempts >= 5) {
      return res.status(429).json({
        message: 'Too many failed attempts. Please request a new OTP.',
      });
    }

    // Verify OTP
    if (!user.verifyOTP(otp)) {
      user.otpAttempts += 1;
      await user.save();
      return res.status(400).json({
        message: 'Invalid or expired OTP',
        attempts: user.otpAttempts,
      });
    }

    // Mark user as verified
    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    user.otpAttempts = 0;
    await user.save();

    // Send welcome email
    await sendWelcomeEmail(email, user.name);

    // Generate JWT token
    const token = generateToken(user._id, user.email);

    res.status(200).json({
      message: 'Email verified successfully!',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('OTP verification error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Resend OTP controller
const resendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: 'User already verified' });
    }

    // Generate new OTP
    const otp = generateOTP();
    const otpExpiry = getOTPExpiry();

    user.otp = otp;
    user.otpExpires = otpExpiry;
    user.otpAttempts = 0;
    await user.save();

    // Send OTP email
    const emailResult = await sendOTPEmail(email, otp);

    if (!emailResult.success) {
      return res.status(500).json({
        message: 'Failed to send OTP email. Please try again.',
      });
    }

    res.status(200).json({ message: 'OTP resent to your email' });
  } catch (error) {
    console.error('Resend OTP error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Login controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }

    // Find user with password field selected
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if user is verified
    if (!user.isVerified) {
      return res.status(403).json({
        message: 'Please verify your email first',
        userId: user._id,
      });
    }

    // Compare passwords
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = generateToken(user._id, user.email);

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  signup,
  verifyOTP,
  resendOTP,
  login,
};
