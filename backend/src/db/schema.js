/* In this file, we are creating the schema using Mongoose for the data we receive for the user */

const mongoose = require("mongoose");
const { Schema } = mongoose;

// We are creating a new schema named bookMovieSchema
const bookMovieSchema = new Schema({
  movie: { type: String, required: true }, // The name of the movie being booked, set to string
  slot: { type: String, required: true }, // The time slot for the movie, set to string
  seats: {
    // The object is created for the seat numbers with type number
    A1: { type: Number, default: 0 },
    A2: { type: Number, default: 0 },
    A3: { type: Number, default: 0 },
    A4: { type: Number, default: 0 },
    D1: { type: Number, default: 0 },
    D2: { type: Number, default: 0 },
  },
});

// Here we are exporting the schema as a Mongoose model
module.exports = mongoose.model("Booking", bookMovieSchema);
