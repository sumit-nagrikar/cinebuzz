import React, { useState, useEffect } from "react";
import axios from "axios";
import BsContext from "./Context";

const BsState = (props) => {
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [time, changeTime] = useState("");
  const [movie, changeMovie] = useState("");
  const [noOfSeat, changeNoOfSeats] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
  });
  const [lastBookingDetails, setLastBookingDetails] = useState(null);

  const handlePostBooking = async () => {
    try {
      const response = await axios.post(`https://cinebuzz-of1h.onrender.com/api/booking`, {
        movie: movie,      //Use here localhost url for running on local instead of this "https://cinebuzz-of1h.onrender.com"
        slot: time,
        seats: noOfSeat,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;

      setErrorPopup(true);
      setErrorMessage(data.message);

      if (response.status === 200) {
        changeTime("");
        changeMovie("");
        changeNoOfSeats({
          A1: "",
          A2: "",
          A3: "",
          A4: "",
          D1: "",
          D2: "",
        });
        setLastBookingDetails(data.data);

        window.localStorage.clear();
      }
    } catch (error) {
      setErrorPopup(false);
      setErrorMessage(error.response?.data?.message || "An error occurred");
    }
  };

  const handleGetLastBooking = async () => {
    try {
      const response = await axios.get(`https://cinebuzz-of1h.onrender.com/api/booking`);//add server api
      const data = response.data; //Use here localhost url for running on local instead of this "https://cinebuzz-of1h.onrender.com"
      setLastBookingDetails(data.data);
    } catch (error) {
      setErrorPopup(false);
      setErrorMessage(error.response?.data?.message || "An error occurred");
    }
  };

  useEffect(() => {
    const movie = window.localStorage.getItem("movie");
    const slot = window.localStorage.getItem("slot");
    const seats = JSON.parse(window.localStorage.getItem("seats"));

    if (movie || slot || seats) {
      changeTime(slot);
      changeMovie(movie);
      changeNoOfSeats(seats);
    }
  }, []);

  return (
    <BsContext.Provider
      value={{
        handlePostBooking,
        handleGetLastBooking,
        movie,
        changeMovie,
        time,
        changeTime,
        noOfSeat,
        changeNoOfSeats,
        lastBookingDetails,
        errorPopup,
        setErrorPopup,
        errorMessage,
        setErrorMessage,
      }}
    >
      {props.children}
    </BsContext.Provider>
  );
};

export default BsState;
