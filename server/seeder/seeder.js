const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Card = require('../models/Card');

dotenv.config();

mongoose.connect("mongodb://localhost:27017/helpcenter")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const seedCards = [
  { title: 'Branches', description: 'Manage and document your designs.' },
  { title: 'Manage Your Account', description: 'Update your personal details and preferences.' },
  { title: 'Manage Billing', description: 'Manage your billing information and subscriptions.' },
];

const seedDB = async () => {
  await Card.deleteMany({});
  await Card.insertMany(seedCards);
  console.log('Database seeded');
  mongoose.connection.close();
};

seedDB();
