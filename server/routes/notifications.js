const router = require('express').Router();
const Notification = require('../models/Notification');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

// Get notifications for current user
router.get('/', async (req, res) => {
  try {
    const query = { user: req.user._id };
    if (req.query.dismissed !== undefined) query.dismissed = req.query.dismissed === 'true';
    if (req.query.read !== undefined) query.read = req.query.read === 'true';
    const notifications = await Notification.find(query).sort({ createdAt: -1 }).limit(50).lean();
    const result = notifications.map(n => ({ ...n, id: n._id.toString() }));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create notification
router.post('/', async (req, res) => {
  try {
    const data = { ...req.body, user: req.user._id };
    const notification = await Notification.create(data);
    res.status(201).json({ ...notification.toObject(), id: notification._id.toString() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update notification
router.put('/:id', async (req, res) => {
  try {
    const notification = await Notification.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    ).lean();
    if (!notification) return res.status(404).json({ error: 'Not found' });
    res.json({ ...notification, id: notification._id.toString() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
