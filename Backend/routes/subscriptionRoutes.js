const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');

// Subscribe to a channel
router.post('/', async (req, res) => {
  try {
    const { userId, channelId } = req.body;
    const newSubscription = new Subscription({ userId, channelId });
    await newSubscription.save();
    res.status(201).json(newSubscription);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Unsubscribe from a channel
router.delete('/:id', async (req, res) => {
  try {
    const subscription = await Subscription.findByIdAndDelete(req.params.id);
    if (!subscription) return res.status(404).json({ message: 'Subscription not found' });
    res.json({ message: 'Unsubscribed from channel' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
