const router = require('express').Router();
const authMiddleware = require('../middleware/auth');

const FAQ = {
  'how do i start the 30-day challenge': "To start the 30-day challenge, go to the Select Language page, pick your language, and you'll be taken to your Dashboard. From there, hit the Start button to begin Day 1!",
  'how does the streak system work': "Your streak counts how many days in a row you complete at least one lesson. Miss a day and your streak resets to 0. Keep going daily to build your longest streak!",
  'what badges can i earn': "You can earn 10 badges: First Step (complete your first lesson), On Fire (3-day streak), Week Warrior (7-day streak), Fortnight Hero (14-day streak), Month Master (30-day streak), Word Collector (50 words), Vocabulary Pro (100 words), XP Hunter (500 XP), XP Master (1000 XP), and Perfect Quiz (ace a full quiz).",
  'how does the kids zone work': "The Kids Zone is a special mode for children aged 4-12. Kids pick an avatar, enter their name, and get age-appropriate lessons with stars as rewards instead of XP. Parents can manage settings in Parent Settings.",
  'how do i track my progress': "Visit your Dashboard to see your current day, XP, streak, and lesson map. The Insights page shows detailed analytics. The Vocabulary page lists all words you've learned.",
  'what languages are available': "KindLearn currently supports 8 languages: Spanish, French, German, Japanese, Korean, Italian, Portuguese, and Mandarin Chinese.",
};

const findAnswer = (question) => {
  const q = question.toLowerCase().replace(/[?!.,]/g, '').trim();
  for (const [key, answer] of Object.entries(FAQ)) {
    if (q.includes(key) || key.split(' ').filter(w => w.length > 3).every(w => q.includes(w))) {
      return answer;
    }
  }
  return null;
};

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'message required' });

    // Try FAQ lookup first
    const faqAnswer = findAnswer(message);
    if (faqAnswer) {
      return res.json({ reply: faqAnswer });
    }

    // If Anthropic API key is configured, use Claude
    if (process.env.ANTHROPIC_API_KEY) {
      const Anthropic = require('@anthropic-ai/sdk');
      const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
      const response = await anthropic.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 300,
        system: `You are KindBot, a friendly AI assistant for KindLearn — a gamified language learning app. KindLearn offers 30-day language challenges in 8 languages (Spanish, French, German, Japanese, Korean, Italian, Portuguese, Mandarin). Features include daily lessons, XP, streaks, badges, a Kids Zone for children aged 4-12, flashcards, listening games, and speaking practice. Answer questions helpfully and briefly.`,
        messages: [{ role: 'user', content: message }]
      });
      return res.json({ reply: response.content[0].text });
    }

    // Fallback
    res.json({
      reply: "I'm not sure about that specific question. For more help, please use the Contact Us form below and our team will get back to you!"
    });
  } catch (err) {
    console.error('Chat error:', err);
    res.status(500).json({ error: 'Chat unavailable' });
  }
});

module.exports = router;
