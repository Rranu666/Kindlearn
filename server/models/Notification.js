const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['milestone', 'achievement', 'task', 'update'], required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  icon: { type: String },
  action_url: { type: String },
  read: { type: Boolean, default: false },
  dismissed: { type: Boolean, default: false },
  language: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);
