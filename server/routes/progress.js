const router = require('express').Router();
const UserProgress = require('../models/UserProgress');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

// Filter/list progress records for current user
router.get('/', async (req, res) => {
  try {
    const query = { user: req.user._id };
    if (req.query.language) query.language = req.query.language;
    if (req.query.mode) query.mode = req.query.mode;
    const records = await UserProgress.find(query).lean();
    // Convert _id to id for frontend compatibility
    const result = records.map(r => ({ ...r, id: r._id.toString() }));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users' progress for leaderboard (language + mode)
router.get('/leaderboard', async (req, res) => {
  try {
    const { language, mode = 'adult' } = req.query;
    if (!language) return res.status(400).json({ error: 'language required' });
    const records = await UserProgress.find({ language, mode })
      .populate('user', 'name photo')
      .sort({ xp_total: -1 })
      .limit(20)
      .lean();
    const result = records.map(r => ({
      id: r._id.toString(),
      xp_total: r.xp_total,
      streak_days: r.streak_days,
      user: r.user
    }));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create progress record
router.post('/', async (req, res) => {
  try {
    const data = { ...req.body, user: req.user._id };
    const record = await UserProgress.create(data);
    res.status(201).json({ ...record.toObject(), id: record._id.toString() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update progress record
router.put('/:id', async (req, res) => {
  try {
    const record = await UserProgress.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    ).lean();
    if (!record) return res.status(404).json({ error: 'Not found' });
    res.json({ ...record, id: record._id.toString() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
