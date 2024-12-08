const express = require('express');
const router = express.Router();
const Like = require('../models/Like');

// Like a video
router.post('/', async (req, res) => {
  try {
    const { videoId, userId, commentId } = req.body;
    const newLike = new Like({ videoId, userId, commentId });
    await newLike.save();
    res.status(201).json(newLike);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all likes for a video
router.get('/:videoId', async (req, res) => {
  try {
    const likes = await Like.find({ videoId: req.params.videoId });
    res.json(likes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
