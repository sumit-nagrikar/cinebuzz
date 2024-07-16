import React from "react";
import "../styles/radioComponent.css"; // Importing CSS for styling

const RadioComponent = ({ text, changeSelection, data }) => {
  // Function to handle radio button selection
  const handleChecked = (value) => {
    changeSelection(value); // Calls the changeSelection function passed from parent component
  };

  return (
    <div
      name={text} // Setting name attribute based on text prop
      // Applying conditional class based on whether data equals text (for active/inactive state)
      className={`form-check-label ${data === text ? "active" : "inactive"}`}
      onClick={() => {
        handleChecked(text); // Calls handleChecked function with selected value on click
      }}
    >
      <span className={"text"}>{text}</span> {/* Displays the text label */}
    </div>
  );
};

export default RadioComponent;
