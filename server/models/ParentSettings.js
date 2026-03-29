const mongoose = require('mongoose');

const parentSettingsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  daily_limit_minutes: { type: Number, default: 30 },
  email_summary_enabled: { type: Boolean, default: false },
  summary_email: { type: String },
  summary_frequency: { type: String, enum: ['daily', 'weekly'], default: 'weekly' },
  notifications_enabled: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('ParentSettings', parentSettingsSchema);
