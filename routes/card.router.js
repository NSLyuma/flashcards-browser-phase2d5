const cardRouter = require('express').Router();
const { Deck } = require('../db/models');

cardRouter.get('/topicPage/:id', async (req, res) => {
  const deck = await Deck.findOne({ where: { id: req.params.id } });
});