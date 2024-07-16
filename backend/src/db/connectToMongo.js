const mongoose = require("mongoose");
require('dotenv').config();

async function connectToMongo() {
  try {
    const dbUrl = process.env.MONGODB_URI;
    if (!dbUrl) {
      throw new Error('MONGODB_URI is not defined. Please check your environment variables.');
    }

    // Optional: Uncomment to check URI scheme
    // if (!dbUrl.startsWith('mongodb://') && !dbUrl.startsWith('mongodb+srv://')) {
    //   throw new Error('Invalid MongoDB URI scheme. It should start with "mongodb://" or "mongodb+srv://".');
    // }


    const client = await mongoose.connect(dbUrl);

    console.log("Connected to MongoDB");

    return client;
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    throw error;
  }
}

module.exports = connectToMongo;
