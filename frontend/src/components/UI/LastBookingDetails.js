import React, { useEffect } from "react";
import "../styles/lastbookingdetails.css"; // Importing CSS for styling
import { useContext } from "react"; // Importing useContext hook from React
import BsContext from "../../context/Context"; // Importing context from Context.js
import { seats } from "../../data"; // Importing seats data

const LastBookingDetails = (props) => {
  const context = useContext(BsContext); // Accessing context data

  const { handleGetLastBooking, lastBookingDetails } = context; // Destructuring context values

  useEffect(() => {
    // useEffect hook to fetch the details of the last booking when component mounts
    handleGetLastBooking();
  }); // we could add Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="last_booking_details_container_main">
      <h2 className="last_booking_details_header">Last Booking Details:</h2>
      {lastBookingDetails ? ( // Conditional rendering based on lastBookingDetails existence
        <>
          <div className="seats_container">
            <p className="seats_header">Seats:</p>
            <ul className="seats">
              {seats.map((seat, index) => {
                // Mapping through seats array to display each seat
                return (
                  <li className="seat_value" key={index}>
                    {seat}: {Number(lastBookingDetails.seats[seat])}
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="slot" style={{ textAlign: "left" }}>
            {/* Displaying the time slot of the last booking */}
            Slot: <span>{lastBookingDetails.slot}</span>
          </p>
          <p className="movie">
            {/* Displaying the movie name of the last booked movie */}
            Movie: <span>{lastBookingDetails.movie}</span>
          </p>
        </>
      ) : (
        // Display message if no previous booking details are available
        <p className="no_previous_booking_msg">No Previous Booking Found!</p>
      )}
    </div>
  );
};

export default LastBookingDetails;
