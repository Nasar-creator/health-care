const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

// GET all cards
router.get('/cards', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create a new card
router.post('/cards', async (req, res) => {
  const card = new Card({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newCard = await card.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET a specific card by title
router.get('/cards/:title', async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) return res.status(404).json({ message: 'Card not found' });
    res.json(card);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
