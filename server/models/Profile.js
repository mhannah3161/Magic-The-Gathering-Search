//Requirements
const { CardInfo, model } = require('mongoose');
const bcrypt = require('bcrypt');


// Makes model CardInfo. Sets Each cards parameters

const CardInfo = new CardInfo (
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
  }
);

module.exports = CardInfo;