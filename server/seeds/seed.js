const db = require('../config/connection');
const { User, Car } = require('../models');

const carData = require('./seedCar.json');
const userData = require('./seedUser.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Car.deleteMany({});

  const users = await User.insertMany(userData);
  const cars = await Car.insertMany(carData);

  // console.log(users[0]);
  console.log('seeded!');
});
