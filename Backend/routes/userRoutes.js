const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Ensure path is correct
const userController = require('../controllers/userController'); // Ensure path is correct

// Signup route (creating a new user)
router.post('/signup', userController.signup);

// Login route
router.post('/login', userController.login);

// Get a user by ID (dynamic route - should be placed after specific routes)
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route for creating a user (alternative data saving, if needed)
router.post('/', async (req, res) => {
  try {
    const { username, email, password_hash } = req.body;
    const newUser = new User({ username, email, password_hash });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
