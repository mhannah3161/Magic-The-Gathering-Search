const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  card_id: {
    type: String,
    required: true,
  },
});

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;
