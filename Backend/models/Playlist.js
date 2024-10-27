const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  createDate: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  videos: [{ type: Schema.Types.ObjectId, ref: 'Video' }],
});

module.exports = mongoose.model('Playlist', playlistSchema);
