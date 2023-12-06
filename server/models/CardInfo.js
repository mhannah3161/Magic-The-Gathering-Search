//Requirements
const { CardInfo } = require('mongoose');



// Makes model CardInfo. Sets Each cards parameters

const CardInfo = new CardInfo (
  {
    card_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_set: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_subtype: {
      type: DataTypes.STRING,
      allowNull: true
    },
    card_mana: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_rarity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_pt: { 
      type: DataTypes.STRING,
      allowNull: true
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