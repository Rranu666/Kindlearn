export const LANGUAGES = [
  { id: 'spanish', name: 'Spanish', flag: '🇪🇸', native: 'Español', color: 'amber', learners: '12M+' },
  { id: 'french', name: 'French', flag: '🇫🇷', native: 'Français', color: 'blue', learners: '8M+' },
  { id: 'german', name: 'German', flag: '🇩🇪', native: 'Deutsch', color: 'rose', learners: '5M+' },
  { id: 'japanese', name: 'Japanese', flag: '🇯🇵', native: '日本語', color: 'pink', learners: '7M+' },
  { id: 'korean', name: 'Korean', flag: '🇰🇷', native: '한국어', color: 'cyan', learners: '6M+' },
  { id: 'italian', name: 'Italian', flag: '🇮🇹', native: 'Italiano', color: 'emerald', learners: '4M+' },
  { id: 'portuguese', name: 'Portuguese', flag: '🇧🇷', native: 'Português', color: 'violet', learners: '3M+' },
  { id: 'mandarin', name: 'Mandarin', flag: '🇨🇳', native: '中文', color: 'orange', learners: '9M+' },
];

export const LESSON_CONTENT = {
  spanish: {
    greetings: ['Hola', 'Buenos días', 'Buenas tardes', 'Buenas noches', 'Adiós', '¿Cómo estás?', 'Bien, gracias', 'Mucho gusto'],
    basics: ['Sí', 'No', 'Por favor', 'Gracias', 'De nada', 'Lo siento', 'Disculpe', 'Perdón'],
    numbers: ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve', 'Diez'],
    family: ['Mamá', 'Papá', 'Hermano', 'Hermana', 'Abuelo', 'Abuela', 'Hijo', 'Hija'],
    food: ['Agua', 'Pan', 'Leche', 'Fruta', 'Carne', 'Arroz', 'Pollo', 'Pescado'],
  },
  french: {
    greetings: ['Bonjour', 'Bonsoir', 'Bonne nuit', 'Au revoir', 'Salut', 'Comment allez-vous?', 'Bien, merci', 'Enchanté'],
    basics: ['Oui', 'Non', "S'il vous plaît", 'Merci', 'De rien', 'Pardon', 'Excusez-moi', 'Désolé'],
    numbers: ['Un', 'Deux', 'Trois', 'Quatre', 'Cinq', 'Six', 'Sept', 'Huit', 'Neuf', 'Dix'],
    family: ['Maman', 'Papa', 'Frère', 'Sœur', 'Grand-père', 'Grand-mère', 'Fils', 'Fille'],
    food: ['Eau', 'Pain', 'Lait', 'Fruit', 'Viande', 'Riz', 'Poulet', 'Poisson'],
  },
  german: {
    greetings: ['Hallo', 'Guten Morgen', 'Guten Tag', 'Guten Abend', 'Tschüss', 'Wie geht es Ihnen?', 'Gut, danke', 'Freut mich'],
    basics: ['Ja', 'Nein', 'Bitte', 'Danke', 'Gern geschehen', 'Entschuldigung', 'Verzeihung', 'Es tut mir leid'],
    numbers: ['Eins', 'Zwei', 'Drei', 'Vier', 'Fünf', 'Sechs', 'Sieben', 'Acht', 'Neun', 'Zehn'],
    family: ['Mama', 'Papa', 'Bruder', 'Schwester', 'Großvater', 'Großmutter', 'Sohn', 'Tochter'],
    food: ['Wasser', 'Brot', 'Milch', 'Obst', 'Fleisch', 'Reis', 'Hähnchen', 'Fisch'],
  },
};

export const DAILY_TOPICS = [
  'Greetings & Introductions', 'Numbers & Counting', 'Colors & Shapes',
  'Family & Friends', 'Food & Drinks', 'Animals & Nature', 'Body Parts',
  'Clothing & Accessories', 'Weather & Seasons', 'Time & Calendar',
  'Home & Furniture', 'City & Directions', 'Transportation', 'Shopping & Money',
  'Restaurant & Ordering', 'Hobbies & Sports', 'School & Work',
  'Feelings & Emotions', 'Health & Body', 'Travel & Vacation',
  'Music & Entertainment', 'Technology & Internet', 'Cooking & Kitchen',
  'Nature & Environment', 'Celebrations & Holidays', 'Conversation Basics',
  'Past Tense Practice', 'Future Tense Practice', 'Review & Assessment', 'Graduation Day'
];

export const KIDS_AVATARS = [
  { id: 'fox', emoji: '🦊', name: 'Foxy' },
  { id: 'panda', emoji: '🐼', name: 'Pandy' },
  { id: 'unicorn', emoji: '🦄', name: 'Sparkle' },
  { id: 'rocket', emoji: '🚀', name: 'Blaze' },
  { id: 'star', emoji: '⭐', name: 'Twinkle' },
  { id: 'dragon', emoji: '🐉', name: 'Drago' },
];

export const BADGES = [
  { id: 'first_lesson', name: 'First Step', emoji: '🌟', desc: 'Complete your first lesson' },
  { id: 'streak_3', name: 'On Fire', emoji: '🔥', desc: '3-day streak' },
  { id: 'streak_7', name: 'Week Warrior', emoji: '⚔️', desc: '7-day streak' },
  { id: 'streak_14', name: 'Unstoppable', emoji: '💪', desc: '14-day streak' },
  { id: 'streak_30', name: 'Champion', emoji: '🏆', desc: '30-day streak' },
  { id: 'words_50', name: 'Wordsmith', emoji: '📚', desc: 'Learn 50 words' },
  { id: 'words_100', name: 'Vocabulary Master', emoji: '🧠', desc: 'Learn 100 words' },
  { id: 'xp_500', name: 'XP Hunter', emoji: '💎', desc: 'Earn 500 XP' },
  { id: 'xp_1000', name: 'XP Legend', emoji: '👑', desc: 'Earn 1000 XP' },
  { id: 'perfect_quiz', name: 'Perfect Score', emoji: '✨', desc: 'Score 100% on a quiz' },
];