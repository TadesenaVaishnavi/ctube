const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

// Upload a video
router.post('/', async (req, res) => {
  try {
    const { userId, title, description, videoUrl, thumbnailUrl, duration, privacy } = req.body;
    const newVideo = new Video({ userId, title, description, videoUrl, thumbnailUrl, duration, privacy });
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a video by ID
router.get('/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate('userId', 'username');
    if (!video) return res.status(404).json({ message: 'Video not found' });
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Like a video
router.post('/:id/like', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: 'Video not found' });
    video.views += 1;
    await video.save();
    res.json({ message: 'Video liked', views: video.views });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
