const router = require('express').Router();
const ParentSettings = require('../models/ParentSettings');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

// Get current user's parent settings
router.get('/', async (req, res) => {
  try {
    const settings = await ParentSettings.find({ user: req.user._id }).lean();
    const result = settings.map(s => ({ ...s, id: s._id.toString() }));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create settings
router.post('/', async (req, res) => {
  try {
    const data = { ...req.body, user: req.user._id };
    const settings = await ParentSettings.create(data);
    res.status(201).json({ ...settings.toObject(), id: settings._id.toString() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update settings
router.put('/:id', async (req, res) => {
  try {
    const settings = await ParentSettings.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    ).lean();
    if (!settings) return res.status(404).json({ error: 'Not found' });
    res.json({ ...settings, id: settings._id.toString() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
