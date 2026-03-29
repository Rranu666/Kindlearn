const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  language: {
    type: String,
    required: true,
    enum: ['spanish', 'french', 'german', 'japanese', 'korean', 'italian', 'portuguese', 'mandarin']
  },
  mode: { type: String, required: true, enum: ['adult', 'kids'] },
  current_day: { type: Number, default: 1 },
  xp_total: { type: Number, default: 0 },
  streak_days: { type: Number, default: 0 },
  longest_streak: { type: Number, default: 0 },
  lessons_completed: { type: [Number], default: [] },
  daily_xp: { type: Number, default: 0 },
  last_activity_date: { type: String },
  kid_name: { type: String },
  kid_age_group: { type: String, enum: ['4-6', '7-9', '10-12'] },
  kid_avatar: { type: String },
  badges: { type: [String], default: [] },
  words_learned: { type: Number, default: 0 },
  struggled_words: { type: Map, of: Number, default: {} },
  reminder_enabled: { type: Boolean, default: false },
  reminder_time: { type: String },
  reminder_email: { type: String },
  reminder_timezone: { type: String },
  daily_goal_minutes: { type: Number, default: 10 },
  daily_practice_minutes: { type: Number, default: 0 }
}, { timestamps: true });

// One progress record per user per language per mode
userProgressSchema.index({ user: 1, language: 1, mode: 1 }, { unique: true });

module.exports = mongoose.model('UserProgress', userProgressSchema);
