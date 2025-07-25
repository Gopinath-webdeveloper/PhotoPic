const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ username, email, password: hashedPassword });
    await user.save();

    const payload = { id: user._id, role: user.role }; // Add role to payload
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1d' });
    res.json({ token, user: { id: user._id, username, email, role: user.role } }); // Return role
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
// @access  Public
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { id: user._id, role: user.role }; // Add role to payload
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1d' });
    res.json({ token, user: { id: user._id, username: user.username, email, role: user.role } }); // Return role
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// @route   GET /api/auth/me
// @desc    Get logged in user's profile
// @access  Private
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
}; 