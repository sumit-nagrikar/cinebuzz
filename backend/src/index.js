


require("dotenv").config(); // Load environment variables


const express = require("express");//7, 15 to communicate backend with frontend 


const cors = require("cors");//10, 21
const bodyParser = require("body-parser");//11,22,23
const connectToMongo = require("./db/connectToMongo.js"); 

const bookingRoutes = require("./routes/routes.js"); // Adjust the path accordingly

const app = express();

// Connect to MongoDB
connectToMongo();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(express.json());

// Routes
app.use("/api", bookingRoutes); // Use the booking routes

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
