const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  collection_id: {
    type: String,
    required: true,
  },
  deck_id: {
    type: String,
    required: true,
  },
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
