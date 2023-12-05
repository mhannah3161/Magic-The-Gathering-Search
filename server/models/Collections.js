//Requirements
const { Collection } = require('mongoose');


// Makes model CardInfo. Sets Each cards parameters

const collection = new Collection(
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
);

module.exports = collection;