const express = require('express');
const router = express.Router();
const Playlist = require('../models/Playlist');

// Create a new playlist
router.post('/', async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    const newPlaylist = new Playlist({ title, description, userId });
    await newPlaylist.save();
    res.status(201).json(newPlaylist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add video to playlist
router.post('/:id/addVideo', async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id);
    if (!playlist) return res.status(404).json({ message: 'Playlist not found' });

    const { videoId } = req.body;
    playlist.videos.push(videoId);
    await playlist.save();
    res.json({ message: 'Video added to playlist' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Remove video from playlist
router.post('/:id/removeVideo', async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id);
    if (!playlist) return res.status(404).json({ message: 'Playlist not found' });

    const { videoId } = req.body;
    playlist.videos = playlist.videos.filter(id => id != videoId);
    await playlist.save();
    res.json({ message: 'Video removed from playlist' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
