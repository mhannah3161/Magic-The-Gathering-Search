const mongoose = require('mongoose');

const cardInfoSchema = new mongoose.Schema({
  card_name: {
    type: String,
    required: true,
  },
  card_set: {
    type: String,
    required: true,
  },
  card_type: {
    type: String,
    required: true,
  },
  card_subtype: {
    type: String,
  },
  card_mana: {
    type: String,
    required: true,
  },
  card_rarity: {
    type: String,
    required: true,
  },
  card_pt: {
    type: String,
  },
  card_pic: {
    type: String,
    required: true,
  },
  card_artist: {
    type: String,
    required: true,
  }
});

const CardInfo = mongoose.model('CardInfo', cardInfoSchema);

module.exports = CardInfo;
