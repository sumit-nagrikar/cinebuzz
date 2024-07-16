import React, { useState, useContext, useEffect } from "react";
import { seats } from "../../data"; // Importing seats data from data file
import "../styles/selectSeats.css"; // Importing CSS for styling
import BsContext from "../../context/Context"; // Importing context
import SeatsInput from "./SeatsSetup"; // Importing SeatsInput component

const SelectSeats = () => {
  const [seat, changeSeats] = useState([]); // State to manage selected seats
  const context = useContext(BsContext); // Accessing context
  const { noOfSeat, changeNoOfSeats } = context; // Destructuring necessary values from context

  useEffect(() => {
    // Reset selected seats whenever noOfSeat changes
    changeSeats([]);
  }, [noOfSeat]);

  return (
    <>
      <div className="SS_wrapper">
        <h1 className="SS_heading">Select Seats :-</h1>{" "}
        {/* Heading for seat selection */}
        <div className="SS_main_container">
          {seats.map((e, index) => {
            return (
              <SeatsInput
                seat={seat} // Current selected seats
                key={index} // Unique key for React
                index={index} // Index of the seat in the array
                changeSeats={changeSeats} // Function to change selected seats
                noOfSeat={noOfSeat} // Object containing number of each seat selected
                text={e} // Text value of the seat
                changeNoOfSeats={changeNoOfSeats} // Function to change number of seats
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectSeats;
