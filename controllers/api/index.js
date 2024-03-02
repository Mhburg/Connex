const router = require('express').Router();
const userRoutes = require('./userRoutes');
const flashcardRoutes = require('./flashcardRoutes');

router.use('/users', userRoutes);
router.use('/flashcard', flashcardRoutes);

module.exports = router;
