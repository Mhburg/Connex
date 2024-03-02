const router = require('express').Router();
const userRoutes = require('./userRoutes');
const flashcardRoutes = require('./flashcardRoutes');
const openaiRoutes = require('./openAIRoutes');

router.use('/users', userRoutes);
router.use('/flashcard', flashcardRoutes);
router.use('/openai', openaiRoutes);

module.exports = router;
