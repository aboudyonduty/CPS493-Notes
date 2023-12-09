const express = require('express');
const userController = require('../controllers/users');
const authenticate = require('../middleware/authenticate'); // Adjust the path to your authentication middleware

const router = express.Router();

// User registration
router.post('/users/register', userController.register);

// User login
router.post('/users/login', userController.login);

// Get user information (assuming authentication is required)
router.get('/users/:id', authenticate, userController.getUser);

// Update user information (assuming authentication and authorization checks)
router.put('/users/:id', authenticate, userController.updateUser);

// Delete a user account (assuming authentication and authorization checks)
router.delete('/users/:id', authenticate, userController.deleteUser);

module.exports = router;
