const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  videoUrl: { type: String, required: true },
  thumbnailUrl: { type: String },
  views: { type: Number, default: 0 },
  duration: { type: Number }, // Duration in seconds
  uploadDate: { type: Date, default: Date.now },
  privacy: { type: String, enum: ['public', 'private', 'unlisted'], default: 'public' },
}, { timestamps: true });

module.exports = mongoose.model('Video', videoSchema);
