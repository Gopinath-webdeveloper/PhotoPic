const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { register, login, getMe } = require('../controllers/authController');

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', register);

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', login);

// @route   GET /api/auth/me
// @desc    Get logged in user's profile
// @access  Private
router.get('/me', authMiddleware, getMe);

module.exports = router; 