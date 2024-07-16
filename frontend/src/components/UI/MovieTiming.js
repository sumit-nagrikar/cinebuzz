import React, { useContext, useCallback } from "react";
import RadioComponent from "./RadioComponent"; // Importing RadioComponent for rendering radio buttons
import { slots } from "../../data"; // Importing slots data array
import "../styles/movieTiming.css"; // Importing CSS for styling
import BsContext from "../../context/Context"; // Importing context from Context.js

const TimeShedule = () => {
  const context = useContext(BsContext); // Accessing context data

  const { time, changeTime } = context; // Destructuring required values from context

  const handleChangeTime = useCallback(
    (value) => {
      // useCallback hook memoizes this function to prevent unnecessary re-creation
      changeTime(value); // Updating the selected time in context state
      window.localStorage.setItem("slot", value); // Storing selected time in localStorage
    },
    [changeTime] // Dependency array ensures useCallback only updates if changeTime changes
  );

  return (
    <>
      <div className="Slot_container">
        <h1 className="TS_heading">Select a Schedule :-</h1>
        <div className="TS_main_container">
          {slots.map((el, index) => {
            // Mapping through slots array to render each time slot
            return (
              <RadioComponent
                text={el} // Passing text (time slot) to RadioComponent
                changeSelection={handleChangeTime} // Passing handleChangeTime function as callback to RadioComponent
                data={time} // Passing current selected time from context to RadioComponent
                key={index} // Setting unique key for each RadioComponent
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeShedule;
