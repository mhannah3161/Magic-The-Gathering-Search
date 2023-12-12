const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  collectionName: String,
  collection_cards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CardInfo',
  }],
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
