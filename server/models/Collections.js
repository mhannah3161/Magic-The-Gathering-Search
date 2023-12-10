const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  // UserInfo_id: {
  //   type: String,
  //   required: true,
  // },
  card_id: {
    type: String,
    required: false,
  },
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
