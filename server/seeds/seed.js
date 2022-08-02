const db = require('../config/connection');
const { User, UserTest } = require('../models');

const seedData = require('./seedData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await UserTest.deleteMany({});

  const users = await User.insertMany(seedData)
  const usersTest = await UserTest.insertMany(seedData)

  console.log(usersTest[0]);
  console.log('seeded!');
});
