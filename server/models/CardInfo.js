//Requirements
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CardInfo extends Model {}

// Makes model CardInfo. Sets Each cards parameters

CardInfo.init(
  {
    card_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rarity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artist_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'cardinfo',
  }
);

module.exports = CardInfo;