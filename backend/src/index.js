require("dotenv").config(); // Load environment variables

const express = require("express"); 
const cors = require("cors"); // Middleware to enable Cross-Origin Resource Sharing
// const bodyParser = require("body-parser");// Body-parser middleware (commented out)
const connectToMongo = require("./db/connectToMongo.js"); // Import MongoDB connection function
const bookingRoutes = require("./routes/routes.js"); // Import booking routes

const app = express(); // Create an Express application

// Middleware
app.use(cors()); // Enable CORS
// app.use(bodyParser.urlencoded()); // Use body-parser (commented out)
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use("/api", bookingRoutes); // Use the booking routes

// Start the server
const PORT = process.env.PORT || 8000; // Set the server port from environment variables or default to 8000
app.listen(PORT, () => {
  // Connect to MongoDB
  connectToMongo(); // Connect to MongoDB when the server starts
  console.log(`Server is running on port ${PORT}`); // Log the server start message
});
