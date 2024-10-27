const mongoose = require('mongoose');
const argon2 = require('argon2');

const Schema = mongoose.Schema;

async function hashPassword(password) {
    try {
      return await argon2.hash(password);
    } catch (err) {
      console.error(err);
    }
  }
  // Verifying a password
async function verifyPassword(hash, password) {
    try {
      return await argon2.verify(hash, password);
    } catch (err) {
      console.error(err);
    }
  }

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  profile_picture: { type: String },
  join_date: { type: Date, default: Date.now },
  subscriptionCount: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
