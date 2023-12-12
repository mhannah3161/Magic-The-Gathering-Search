const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
  deckName: String,
  deck_cards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CardInfo',
  }],
});

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;
