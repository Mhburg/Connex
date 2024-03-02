const sequelize = require('../config/connection');
const flashcardData = require('../models/flashcard');
const soundData = require('../models/sound');

// add seeds.json

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await flashcard.bulkCreate(flashcardData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
