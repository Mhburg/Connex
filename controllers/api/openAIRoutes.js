const router = require('express').Router();

router.get('/openai', async (req, res) => {
  const query = req.query;
  const prompt = query.prompt;
  res.json(`The prompt you send is: ${prompt}`);
});

module.exports = router;
