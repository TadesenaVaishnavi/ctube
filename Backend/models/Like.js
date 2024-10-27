const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  videoId: { type: Schema.Types.ObjectId, ref: 'Video', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  commentId: { type: Schema.Types.ObjectId, ref: 'Comment' }, // Optional if liking comments
});

module.exports = mongoose.model('Like', likeSchema);
