const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const channelSchema = new Schema({
  channelID: { type: String, required: true, unique: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  channelName: { type: String, required: true },
  description: { type: String },
  joinDate: { type: Date, default: Date.now },
  totalViews: { type: Number, default: 0 },
  subscribersCount: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Channel', channelSchema);