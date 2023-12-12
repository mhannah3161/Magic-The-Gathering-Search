const db = require('../config/connection');
const { CardInfo, User } = require('../models');
const cleanDB = require('./cleanDB');

const cardData = require('./cardData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  await cleanDB('CardInfo', 'CardInformaton');

  await CardInfo.insertMany(cardData);

  console.log('Cards seeded!');
});
db.once('open', async () => {
  await cleanDB('User', 'UserInformation');

  await User.insertMany(userData);

  console.log('Users seeded!');
  process.exit(0);
});