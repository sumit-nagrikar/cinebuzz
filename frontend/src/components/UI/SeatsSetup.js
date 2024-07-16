import React, { useState, useEffect } from "react";
import "../styles/seatsSetup.css"; // Importing CSS for styling

const SeatsInput = ({
  changeNoOfSeats,
  noOfSeat,
  changeSeats,
  seat,
  text,
  index,
}) => {
  // Using state to manage the input value
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Update the input value whenever noOfSeat or text changes
    setInputValue(noOfSeat?.[text] || "");
  }, [noOfSeat, text]);

  // Function to handle the change in seat input and update the state and local storage
  const change_seats = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    // Update the noOfSeat object with the new seat value
    changeNoOfSeats({ ...noOfSeat, [e.target.name]: Number(newValue) });
    // Store the updated noOfSeat object in local storage
    window.localStorage.setItem(
      "seats",
      JSON.stringify({ ...noOfSeat, [e.target.name]: Number(newValue) })
    );
  };

  // Function to handle seat selection
  const handleChecked = (text) => {
    changeSeats(text); // Calls the changeSeats function passed from parent component
  };

  return (
    <div
      name={text} // Setting name attribute based on text prop
      // Applying conditional class based on whether the seat is selected (for active/inactive state)
      className={`form-check-label seats ${
        seat === text ? "active" : "inactive"
      }`}
      id={`${index}text`}
      onClick={() => {
        handleChecked(text); // Calls handleChecked function with selected seat text on click
      }}
    >
      <span className={"text"}>{text}</span> {/* Displays the seat text */}
      <input
        type="number"
        className="seats-input"
        placeholder="0"
        name={text} // Setting name attribute based on text prop
        min="0" // Setting minimum value for number input
        id={`${index}input`}
        max="30" // Setting maximum value for number input
        onChange={change_seats} // Calls change_seats function on input change
        value={inputValue} // Sets input value from state
      />
    </div>
  );
};

export default SeatsInput;
