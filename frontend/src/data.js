//List of movies available from where we choosing movies
let moviesList = [
  "Inception",
  "Parasite",
  "Interstellar",
  "Joker",
  "Avengers: Endgame",
  "Toy Story 4",
  "Once Upon a Time in Hollywood",
  "1917",
  "Ford v Ferrari",
  "The Irishman",
  "Jojo Rabbit",
  "Little Women"
];


// Time slots available for movie screenings
let slots = ["10:00 AM", "01:00 PM", "03:00 PM", "08:00 PM"];

// Available seat options for booking
let seats = ["A1", "A2", "A3", "A4", "D1", "D2"];

// Exporting the data arrays for use in other modules
exports.moviesList = moviesList;
exports.slots = slots;
exports.seats = seats;
