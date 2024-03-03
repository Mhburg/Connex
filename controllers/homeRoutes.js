const router = require('express').Router();
const { Flashcard, User } = require('../models');
const withAuth = require('../utils/auth');
const OpenAI = require('openai');
const openai = new OpenAI();

router.get('/', async (req, res) => {
  try {
    // Get all flashcard and JOIN with user data
    const flashcardData = await Flashcard.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const flashcards = flashcardData.map((flashcard) =>
      flashcard.get({ plain: true }),
    );

    // Pass serialized data and session flag into template
    res.render('homepage', {
      flashcards,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/flashcard/:id', async (req, res) => {
  try {
    const flashcardData = await Flashcard.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const flashcard = flashcardData.get({ plain: true });

    res.render('flashcard', {
      ...flashcard,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Flashcard }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/welcome', (req, res) => {
  res.json('Hello World');
});

router.get('/openai', async (req, res) => {
  const query = req.query;
  const prompt = query.prompt;
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: prompt }],
    model: 'gpt-3.5-turbo',
  });

  // Extract the text from the completion object and prepend the prefix
  const htmlContent =
    'This is the response:' + completion.choices[0].message.content;
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept',
  );
  res.json(htmlContent);

  // Set the Content-Type header to 'text/html'
  //res.setHeader('Content-Type', 'text/html');

  // Return the HTML content as the response
  //res.send(htmlContent);
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
