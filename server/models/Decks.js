const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
  UserInfo_id: {
    type: String,
    required: true,
  },
  card_id: {
    type: String,
    required: false,
  },
});

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;
