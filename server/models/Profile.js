//Requirements
const { Profile } = require('mongoose');


// Makes model CardInfo. Sets Each cards parameters

const profile = new Profile(
  {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    collection_id: {
      type: DataTypes.STRING,
      allowNull: false
        },
    deck_id: {
    type: DataTypes.STRING,
    allowNull: false
    }
  },
);

module.exports = profile;