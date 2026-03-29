// All vocabulary words per language, organized by category/day
// Each entry: { word, meaning, emoji, category }

export const FLASHCARD_DECK = {
  spanish: [
    // Greetings
    { word: 'Hola', meaning: 'Hello', emoji: '👋', category: 'Greetings' },
    { word: 'Buenos días', meaning: 'Good morning', emoji: '🌅', category: 'Greetings' },
    { word: 'Buenas tardes', meaning: 'Good afternoon', emoji: '🌤️', category: 'Greetings' },
    { word: 'Buenas noches', meaning: 'Good night', emoji: '🌙', category: 'Greetings' },
    { word: 'Adiós', meaning: 'Goodbye', emoji: '👋', category: 'Greetings' },
    { word: '¿Cómo estás?', meaning: 'How are you?', emoji: '🤔', category: 'Greetings' },
    { word: 'Bien, gracias', meaning: 'Fine, thank you', emoji: '😊', category: 'Greetings' },
    { word: 'Mucho gusto', meaning: 'Nice to meet you', emoji: '🤝', category: 'Greetings' },
    // Basics
    { word: 'Sí', meaning: 'Yes', emoji: '✅', category: 'Basics' },
    { word: 'No', meaning: 'No', emoji: '❌', category: 'Basics' },
    { word: 'Por favor', meaning: 'Please', emoji: '🙏', category: 'Basics' },
    { word: 'Gracias', meaning: 'Thank you', emoji: '💙', category: 'Basics' },
    { word: 'De nada', meaning: "You're welcome", emoji: '😌', category: 'Basics' },
    { word: 'Lo siento', meaning: "I'm sorry", emoji: '😔', category: 'Basics' },
    { word: 'Perdón', meaning: 'Excuse me', emoji: '🙋', category: 'Basics' },
    // Numbers
    { word: 'Uno', meaning: 'One', emoji: '1️⃣', category: 'Numbers' },
    { word: 'Dos', meaning: 'Two', emoji: '2️⃣', category: 'Numbers' },
    { word: 'Tres', meaning: 'Three', emoji: '3️⃣', category: 'Numbers' },
    { word: 'Cuatro', meaning: 'Four', emoji: '4️⃣', category: 'Numbers' },
    { word: 'Cinco', meaning: 'Five', emoji: '5️⃣', category: 'Numbers' },
    { word: 'Diez', meaning: 'Ten', emoji: '🔟', category: 'Numbers' },
    // Family
    { word: 'Mamá', meaning: 'Mom', emoji: '👩', category: 'Family' },
    { word: 'Papá', meaning: 'Dad', emoji: '👨', category: 'Family' },
    { word: 'Hermano', meaning: 'Brother', emoji: '👦', category: 'Family' },
    { word: 'Hermana', meaning: 'Sister', emoji: '👧', category: 'Family' },
    { word: 'Abuelo', meaning: 'Grandfather', emoji: '👴', category: 'Family' },
    { word: 'Abuela', meaning: 'Grandmother', emoji: '👵', category: 'Family' },
    // Food
    { word: 'Agua', meaning: 'Water', emoji: '💧', category: 'Food' },
    { word: 'Pan', meaning: 'Bread', emoji: '🍞', category: 'Food' },
    { word: 'Leche', meaning: 'Milk', emoji: '🥛', category: 'Food' },
    { word: 'Fruta', meaning: 'Fruit', emoji: '🍎', category: 'Food' },
    { word: 'Carne', meaning: 'Meat', emoji: '🥩', category: 'Food' },
    { word: 'Arroz', meaning: 'Rice', emoji: '🍚', category: 'Food' },
    { word: 'Pollo', meaning: 'Chicken', emoji: '🍗', category: 'Food' },
    { word: 'Pescado', meaning: 'Fish', emoji: '🐟', category: 'Food' },
    // Animals
    { word: 'Gato', meaning: 'Cat', emoji: '🐱', category: 'Animals' },
    { word: 'Perro', meaning: 'Dog', emoji: '🐶', category: 'Animals' },
    { word: 'Pájaro', meaning: 'Bird', emoji: '🐦', category: 'Animals' },
    { word: 'Caballo', meaning: 'Horse', emoji: '🐴', category: 'Animals' },
    // Colors
    { word: 'Rojo', meaning: 'Red', emoji: '🔴', category: 'Colors' },
    { word: 'Azul', meaning: 'Blue', emoji: '🔵', category: 'Colors' },
    { word: 'Verde', meaning: 'Green', emoji: '🟢', category: 'Colors' },
    { word: 'Amarillo', meaning: 'Yellow', emoji: '🟡', category: 'Colors' },
    { word: 'Blanco', meaning: 'White', emoji: '⬜', category: 'Colors' },
    { word: 'Negro', meaning: 'Black', emoji: '⬛', category: 'Colors' },
  ],
  french: [
    { word: 'Bonjour', meaning: 'Hello', emoji: '👋', category: 'Greetings' },
    { word: 'Bonsoir', meaning: 'Good evening', emoji: '🌆', category: 'Greetings' },
    { word: 'Bonne nuit', meaning: 'Good night', emoji: '🌙', category: 'Greetings' },
    { word: 'Au revoir', meaning: 'Goodbye', emoji: '👋', category: 'Greetings' },
    { word: 'Salut', meaning: 'Hi', emoji: '😊', category: 'Greetings' },
    { word: 'Bien, merci', meaning: 'Fine, thank you', emoji: '😊', category: 'Greetings' },
    { word: 'Enchanté', meaning: 'Nice to meet you', emoji: '🤝', category: 'Greetings' },
    { word: 'Oui', meaning: 'Yes', emoji: '✅', category: 'Basics' },
    { word: 'Non', meaning: 'No', emoji: '❌', category: 'Basics' },
    { word: "S'il vous plaît", meaning: 'Please', emoji: '🙏', category: 'Basics' },
    { word: 'Merci', meaning: 'Thank you', emoji: '💙', category: 'Basics' },
    { word: 'De rien', meaning: "You're welcome", emoji: '😌', category: 'Basics' },
    { word: 'Pardon', meaning: 'Excuse me', emoji: '🙋', category: 'Basics' },
    { word: 'Un', meaning: 'One', emoji: '1️⃣', category: 'Numbers' },
    { word: 'Deux', meaning: 'Two', emoji: '2️⃣', category: 'Numbers' },
    { word: 'Trois', meaning: 'Three', emoji: '3️⃣', category: 'Numbers' },
    { word: 'Quatre', meaning: 'Four', emoji: '4️⃣', category: 'Numbers' },
    { word: 'Cinq', meaning: 'Five', emoji: '5️⃣', category: 'Numbers' },
    { word: 'Dix', meaning: 'Ten', emoji: '🔟', category: 'Numbers' },
    { word: 'Maman', meaning: 'Mom', emoji: '👩', category: 'Family' },
    { word: 'Papa', meaning: 'Dad', emoji: '👨', category: 'Family' },
    { word: 'Frère', meaning: 'Brother', emoji: '👦', category: 'Family' },
    { word: 'Sœur', meaning: 'Sister', emoji: '👧', category: 'Family' },
    { word: 'Eau', meaning: 'Water', emoji: '💧', category: 'Food' },
    { word: 'Pain', meaning: 'Bread', emoji: '🍞', category: 'Food' },
    { word: 'Lait', meaning: 'Milk', emoji: '🥛', category: 'Food' },
    { word: 'Fruit', meaning: 'Fruit', emoji: '🍎', category: 'Food' },
    { word: 'Chat', meaning: 'Cat', emoji: '🐱', category: 'Animals' },
    { word: 'Chien', meaning: 'Dog', emoji: '🐶', category: 'Animals' },
    { word: 'Rouge', meaning: 'Red', emoji: '🔴', category: 'Colors' },
    { word: 'Bleu', meaning: 'Blue', emoji: '🔵', category: 'Colors' },
    { word: 'Vert', meaning: 'Green', emoji: '🟢', category: 'Colors' },
    { word: 'Jaune', meaning: 'Yellow', emoji: '🟡', category: 'Colors' },
  ],
  german: [
    { word: 'Hallo', meaning: 'Hello', emoji: '👋', category: 'Greetings' },
    { word: 'Guten Morgen', meaning: 'Good morning', emoji: '🌅', category: 'Greetings' },
    { word: 'Guten Tag', meaning: 'Good day', emoji: '☀️', category: 'Greetings' },
    { word: 'Guten Abend', meaning: 'Good evening', emoji: '🌆', category: 'Greetings' },
    { word: 'Tschüss', meaning: 'Goodbye', emoji: '👋', category: 'Greetings' },
    { word: 'Gut, danke', meaning: 'Fine, thank you', emoji: '😊', category: 'Greetings' },
    { word: 'Ja', meaning: 'Yes', emoji: '✅', category: 'Basics' },
    { word: 'Nein', meaning: 'No', emoji: '❌', category: 'Basics' },
    { word: 'Bitte', meaning: 'Please', emoji: '🙏', category: 'Basics' },
    { word: 'Danke', meaning: 'Thank you', emoji: '💙', category: 'Basics' },
    { word: 'Entschuldigung', meaning: 'Excuse me', emoji: '🙋', category: 'Basics' },
    { word: 'Es tut mir leid', meaning: "I'm sorry", emoji: '😔', category: 'Basics' },
    { word: 'Eins', meaning: 'One', emoji: '1️⃣', category: 'Numbers' },
    { word: 'Zwei', meaning: 'Two', emoji: '2️⃣', category: 'Numbers' },
    { word: 'Drei', meaning: 'Three', emoji: '3️⃣', category: 'Numbers' },
    { word: 'Vier', meaning: 'Four', emoji: '4️⃣', category: 'Numbers' },
    { word: 'Fünf', meaning: 'Five', emoji: '5️⃣', category: 'Numbers' },
    { word: 'Zehn', meaning: 'Ten', emoji: '🔟', category: 'Numbers' },
    { word: 'Mama', meaning: 'Mom', emoji: '👩', category: 'Family' },
    { word: 'Papa', meaning: 'Dad', emoji: '👨', category: 'Family' },
    { word: 'Bruder', meaning: 'Brother', emoji: '👦', category: 'Family' },
    { word: 'Schwester', meaning: 'Sister', emoji: '👧', category: 'Family' },
    { word: 'Wasser', meaning: 'Water', emoji: '💧', category: 'Food' },
    { word: 'Brot', meaning: 'Bread', emoji: '🍞', category: 'Food' },
    { word: 'Milch', meaning: 'Milk', emoji: '🥛', category: 'Food' },
    { word: 'Katze', meaning: 'Cat', emoji: '🐱', category: 'Animals' },
    { word: 'Hund', meaning: 'Dog', emoji: '🐶', category: 'Animals' },
    { word: 'Rot', meaning: 'Red', emoji: '🔴', category: 'Colors' },
    { word: 'Blau', meaning: 'Blue', emoji: '🔵', category: 'Colors' },
    { word: 'Grün', meaning: 'Green', emoji: '🟢', category: 'Colors' },
    { word: 'Gelb', meaning: 'Yellow', emoji: '🟡', category: 'Colors' },
  ],
  japanese: [
    { word: 'こんにちは', meaning: 'Hello', emoji: '👋', category: 'Greetings' },
    { word: 'おはよう', meaning: 'Good morning', emoji: '🌅', category: 'Greetings' },
    { word: 'こんばんは', meaning: 'Good evening', emoji: '🌆', category: 'Greetings' },
    { word: 'さようなら', meaning: 'Goodbye', emoji: '👋', category: 'Greetings' },
    { word: 'ありがとう', meaning: 'Thank you', emoji: '🙏', category: 'Basics' },
    { word: 'はい', meaning: 'Yes', emoji: '✅', category: 'Basics' },
    { word: 'いいえ', meaning: 'No', emoji: '❌', category: 'Basics' },
    { word: 'すみません', meaning: 'Excuse me', emoji: '🙋', category: 'Basics' },
    { word: 'ごめんなさい', meaning: "I'm sorry", emoji: '😔', category: 'Basics' },
    { word: 'いち', meaning: 'One', emoji: '1️⃣', category: 'Numbers' },
    { word: 'に', meaning: 'Two', emoji: '2️⃣', category: 'Numbers' },
    { word: 'さん', meaning: 'Three', emoji: '3️⃣', category: 'Numbers' },
    { word: 'ねこ', meaning: 'Cat', emoji: '🐱', category: 'Animals' },
    { word: 'いぬ', meaning: 'Dog', emoji: '🐶', category: 'Animals' },
    { word: 'みず', meaning: 'Water', emoji: '💧', category: 'Food' },
    { word: 'パン', meaning: 'Bread', emoji: '🍞', category: 'Food' },
    { word: 'あか', meaning: 'Red', emoji: '🔴', category: 'Colors' },
    { word: 'あお', meaning: 'Blue', emoji: '🔵', category: 'Colors' },
  ],
  korean: [
    { word: '안녕하세요', meaning: 'Hello', emoji: '👋', category: 'Greetings' },
    { word: '감사합니다', meaning: 'Thank you', emoji: '🙏', category: 'Basics' },
    { word: '네', meaning: 'Yes', emoji: '✅', category: 'Basics' },
    { word: '아니요', meaning: 'No', emoji: '❌', category: 'Basics' },
    { word: '실례합니다', meaning: 'Excuse me', emoji: '🙋', category: 'Basics' },
    { word: '일', meaning: 'One', emoji: '1️⃣', category: 'Numbers' },
    { word: '이', meaning: 'Two', emoji: '2️⃣', category: 'Numbers' },
    { word: '삼', meaning: 'Three', emoji: '3️⃣', category: 'Numbers' },
    { word: '고양이', meaning: 'Cat', emoji: '🐱', category: 'Animals' },
    { word: '개', meaning: 'Dog', emoji: '🐶', category: 'Animals' },
    { word: '물', meaning: 'Water', emoji: '💧', category: 'Food' },
    { word: '빵', meaning: 'Bread', emoji: '🍞', category: 'Food' },
    { word: '빨간색', meaning: 'Red', emoji: '🔴', category: 'Colors' },
    { word: '파란색', meaning: 'Blue', emoji: '🔵', category: 'Colors' },
  ],
  italian: [
    { word: 'Ciao', meaning: 'Hello/Bye', emoji: '👋', category: 'Greetings' },
    { word: 'Buongiorno', meaning: 'Good morning', emoji: '🌅', category: 'Greetings' },
    { word: 'Buonasera', meaning: 'Good evening', emoji: '🌆', category: 'Greetings' },
    { word: 'Arrivederci', meaning: 'Goodbye', emoji: '👋', category: 'Greetings' },
    { word: 'Grazie', meaning: 'Thank you', emoji: '🙏', category: 'Basics' },
    { word: 'Sì', meaning: 'Yes', emoji: '✅', category: 'Basics' },
    { word: 'No', meaning: 'No', emoji: '❌', category: 'Basics' },
    { word: 'Per favore', meaning: 'Please', emoji: '🙏', category: 'Basics' },
    { word: 'Uno', meaning: 'One', emoji: '1️⃣', category: 'Numbers' },
    { word: 'Due', meaning: 'Two', emoji: '2️⃣', category: 'Numbers' },
    { word: 'Tre', meaning: 'Three', emoji: '3️⃣', category: 'Numbers' },
    { word: 'Gatto', meaning: 'Cat', emoji: '🐱', category: 'Animals' },
    { word: 'Cane', meaning: 'Dog', emoji: '🐶', category: 'Animals' },
    { word: 'Acqua', meaning: 'Water', emoji: '💧', category: 'Food' },
    { word: 'Pane', meaning: 'Bread', emoji: '🍞', category: 'Food' },
    { word: 'Rosso', meaning: 'Red', emoji: '🔴', category: 'Colors' },
    { word: 'Blu', meaning: 'Blue', emoji: '🔵', category: 'Colors' },
  ],
  portuguese: [
    { word: 'Olá', meaning: 'Hello', emoji: '👋', category: 'Greetings' },
    { word: 'Bom dia', meaning: 'Good morning', emoji: '🌅', category: 'Greetings' },
    { word: 'Boa tarde', meaning: 'Good afternoon', emoji: '🌤️', category: 'Greetings' },
    { word: 'Boa noite', meaning: 'Good night', emoji: '🌙', category: 'Greetings' },
    { word: 'Tchau', meaning: 'Bye', emoji: '👋', category: 'Greetings' },
    { word: 'Obrigado', meaning: 'Thank you', emoji: '🙏', category: 'Basics' },
    { word: 'Sim', meaning: 'Yes', emoji: '✅', category: 'Basics' },
    { word: 'Não', meaning: 'No', emoji: '❌', category: 'Basics' },
    { word: 'Por favor', meaning: 'Please', emoji: '🙏', category: 'Basics' },
    { word: 'Um', meaning: 'One', emoji: '1️⃣', category: 'Numbers' },
    { word: 'Dois', meaning: 'Two', emoji: '2️⃣', category: 'Numbers' },
    { word: 'Três', meaning: 'Three', emoji: '3️⃣', category: 'Numbers' },
    { word: 'Gato', meaning: 'Cat', emoji: '🐱', category: 'Animals' },
    { word: 'Cachorro', meaning: 'Dog', emoji: '🐶', category: 'Animals' },
    { word: 'Água', meaning: 'Water', emoji: '💧', category: 'Food' },
    { word: 'Pão', meaning: 'Bread', emoji: '🍞', category: 'Food' },
    { word: 'Vermelho', meaning: 'Red', emoji: '🔴', category: 'Colors' },
    { word: 'Azul', meaning: 'Blue', emoji: '🔵', category: 'Colors' },
  ],
  mandarin: [
    { word: '你好', meaning: 'Hello', emoji: '👋', category: 'Greetings' },
    { word: '早上好', meaning: 'Good morning', emoji: '🌅', category: 'Greetings' },
    { word: '晚上好', meaning: 'Good evening', emoji: '🌆', category: 'Greetings' },
    { word: '再见', meaning: 'Goodbye', emoji: '👋', category: 'Greetings' },
    { word: '谢谢', meaning: 'Thank you', emoji: '🙏', category: 'Basics' },
    { word: '是', meaning: 'Yes', emoji: '✅', category: 'Basics' },
    { word: '不', meaning: 'No', emoji: '❌', category: 'Basics' },
    { word: '请', meaning: 'Please', emoji: '🙏', category: 'Basics' },
    { word: '对不起', meaning: "I'm sorry", emoji: '😔', category: 'Basics' },
    { word: '一', meaning: 'One', emoji: '1️⃣', category: 'Numbers' },
    { word: '二', meaning: 'Two', emoji: '2️⃣', category: 'Numbers' },
    { word: '三', meaning: 'Three', emoji: '3️⃣', category: 'Numbers' },
    { word: '猫', meaning: 'Cat', emoji: '🐱', category: 'Animals' },
    { word: '狗', meaning: 'Dog', emoji: '🐶', category: 'Animals' },
    { word: '水', meaning: 'Water', emoji: '💧', category: 'Food' },
    { word: '面包', meaning: 'Bread', emoji: '🍞', category: 'Food' },
    { word: '红色', meaning: 'Red', emoji: '🔴', category: 'Colors' },
    { word: '蓝色', meaning: 'Blue', emoji: '🔵', category: 'Colors' },
  ],
};

// SM-2 spaced repetition algorithm
// Returns next interval in days and new easiness factor
export function sm2(quality, repetitions, interval, easeFactor) {
  // quality: 0-5 (0-2 = fail, 3-5 = pass)
  let newRepetitions = repetitions;
  let newInterval = interval;
  let newEF = easeFactor;

  if (quality >= 3) {
    if (repetitions === 0) newInterval = 1;
    else if (repetitions === 1) newInterval = 6;
    else newInterval = Math.round(interval * easeFactor);
    newRepetitions = repetitions + 1;
  } else {
    newRepetitions = 0;
    newInterval = 1;
  }

  newEF = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (newEF < 1.3) newEF = 1.3;

  return { interval: newInterval, repetitions: newRepetitions, easeFactor: newEF };
}

// Get cards due for review today from stored SRS data
export function getDueCards(deck, srsData) {
  const today = new Date().toISOString().split('T')[0];
  return deck.filter((card) => {
    const key = card.word;
    const data = srsData[key];
    if (!data) return true; // never seen
    return data.nextReview <= today;
  });
}