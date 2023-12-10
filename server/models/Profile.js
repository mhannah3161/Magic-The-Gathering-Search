const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  UserInfo_id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  collection_id: {
    type: String,
    required: false,
  },
  deck_id: {
    type: String,
    required: false,
  },
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
