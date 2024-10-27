const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  channelId: { type: Schema.Types.ObjectId, ref: 'Channel', required: true },
  subscribeDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
