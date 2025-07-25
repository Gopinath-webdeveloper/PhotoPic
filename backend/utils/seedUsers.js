const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config({ path: './.env' });

const sampleUsers = [
  {
    username: 'admin',
    email: 'admin@photopic.com',
    password: 'password123',
    role: 'Admin',
  },
  {
    username: 'moderator',
    email: 'moderator@photopic.com',
    password: 'password123',
    role: 'Moderator',
  },
  {
    username: 'alicewonder',
    email: 'alice@example.com',
    password: 'password123',
    role: 'Member',
  },
];

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log('MongoDB Connected...');

    // Clear existing users
    await User.deleteMany();
    console.log('Users Cleared.');

    // Hash passwords and insert new users
    const createdUsers = await Promise.all(
      sampleUsers.map(async (user) => {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        return new User({
          ...user,
          password: hashedPassword,
        });
      })
    );
    
    await User.insertMany(createdUsers);
    console.log('Sample users have been successfully added!');

  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  } finally {
    mongoose.connection.close();
    console.log('MongoDB connection closed.');
  }
};

seedUsers(); 