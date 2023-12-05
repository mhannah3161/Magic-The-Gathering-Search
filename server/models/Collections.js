//Requirements
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CardInfo extends Model {}

// Makes model CardInfo. Sets Each cards parameters

CardInfo.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_id: {
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