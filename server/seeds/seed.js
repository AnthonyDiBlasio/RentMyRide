const db = require('../config/connection');
const { User} = require('../models');

const seedData = require('./seedData.json');

db.once('open', async () => {
  await User.deleteMany({});

  const users = await User.insertMany(seedData);

  console.log('seeded!');
  process.exit(0);
});
