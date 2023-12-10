const db = require('../config/connection');
const { CardInfo } = require('../models');
const cleanDB = require('./cleanDB');

const data = require('./cardData.json');

db.once('open', async () => {
  await cleanDB('CardInfo', 'CardInformaton');

  await CardInfo.insertMany(data);

  console.log('Cards seeded!');
  process.exit(0);
});