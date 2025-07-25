const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { 
  getAllUsers, 
  createUser, 
  updateUser, 
  deleteUser 
} = require('../controllers/userController');

// @route   GET /api/users
// @desc    Get all users
// @access  Private (Admin)
router.get('/', authMiddleware, getAllUsers);

// @route   POST /api/users
// @desc    Create a new user
// @access  Private (Admin)
router.post('/', authMiddleware, createUser);

// @route   PUT /api/users/:id
// @desc    Update a user
// @access  Private (Admin)
router.put('/:id', authMiddleware, updateUser);

// @route   DELETE /api/users/:id
// @desc    Delete a user
// @access  Private (Admin)
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router; 