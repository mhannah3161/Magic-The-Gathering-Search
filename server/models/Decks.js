//Requirements
const { Deck } = require('mongoose');


// Makes model CardInfo. Sets Each cards parameters

const deck = new Deck(
  {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_id: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
);

module.exports = deck;