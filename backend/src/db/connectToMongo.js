const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from a .env file

// Function to connect to MongoDB
async function connectToMongo() {
  try {
    // Get the MongoDB URI from environment variables
    const dbUrl = process.env.MONGODB_URI;

    // Check if the MongoDB URI is defined
    if (!dbUrl) {
      // If not defined, throw an error
      throw new Error(
        "MONGODB_URI is not defined. Please check your environment variables."
      );
    }

    // Connect to MongoDB using the URI
    const client = await mongoose.connect(dbUrl);

    // Log a success message to the console
    console.log("Connected to MongoDB");

    // Return the MongoDB client
    return client;
  } catch (error) {
    // Log any errors that occur during the connection process
    console.error("Error connecting to the database:", error.message);
    // Rethrow the error to be handled by the calling function
    throw error;
  }
}

// Export the connectToMongo function for use in other parts of the application
module.exports = connectToMongo;
