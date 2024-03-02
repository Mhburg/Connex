const sequelize = require('../config/connection');
const { User, Flashcard } = require('../models');

const userData = require('./userData.json');
const flashcardData = require('./flashcardData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const flashcard of flashcardData) {
    await Flashcard.create({
      ...flashcard,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
