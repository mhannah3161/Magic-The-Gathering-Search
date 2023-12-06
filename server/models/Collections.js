const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  card_id: {
    type: String,
    required: true,
  },
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
