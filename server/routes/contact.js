const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'name, email, and message are required' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Send to admin
    await transporter.sendMail({
      from: `"KindLearn" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `Contact Form: ${subject || 'New Message'}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Message:</strong></p><p>${message}</p>`
    });

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"KindLearn" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'We received your message!',
      html: `<p>Hi ${name},</p><p>Thanks for reaching out! We'll get back to you shortly.</p><p>— The KindLearn Team</p>`
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Contact email error:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

module.exports = router;
