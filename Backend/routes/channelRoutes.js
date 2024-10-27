const express = require('express');
const router = express.Router();
const Channel = require('../models/Channel');

// Create a new channel
router.post('/', async (req, res) => {
  try {
    const { userId, channelName, description } = req.body;
    const newChannel = new Channel({ userId, channelName, description });
    await newChannel.save();
    res.status(201).json(newChannel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get channel by ID
router.get('/:id', async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.id).populate('userId', 'username');
    if (!channel) return res.status(404).json({ message: 'Channel not found' });
    res.json(channel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Subscribe to a channel
router.post('/:id/subscribe', async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.id);
    if (!channel) return res.status(404).json({ message: 'Channel not found' });
    channel.subscribersCount += 1;
    await channel.save();
    res.json({ message: 'Subscribed to channel', subscribersCount: channel.subscribersCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
