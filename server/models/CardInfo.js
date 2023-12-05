//Requirements
const { CardInfo } = require('mongoose');



// Makes model CardInfo. Sets Each cards parameters

const CardInfo = new CardInfo (
  {
    card_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_mana: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_rarity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_pic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_artist: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_cost: {
      // decimal type- 
    },
  }
);

module.exports = CardInfo;