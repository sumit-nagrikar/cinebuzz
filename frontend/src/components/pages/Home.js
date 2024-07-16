// Importing UI components for movie selection, seat selection, timing, and error modal
import LastBookingDetails from "../UI/LastBookingDetails";
import SelectMovie from "../UI/MovieSelection";
import SelectSeats from "../UI/SelectSeats";
import TimeShedule from "../UI/MovieTiming";
import Model from "../UI/ErrorModel";

// Importing CSS styles
import "../styles/Home.css";

// Importing context and React hooks
import BsContext from "../../context/Context";
import { useContext, useMemo } from "react";

const Home = (props) => {
  // Get required data from context using useContext hook
  const context = useContext(BsContext);
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
    changeNoOfSeats,
  } = context; // Destructure properties from context

  // Memoized function to check if any seat has a negative value
  const checkNegativeSeatsValidity = useMemo(() => {
    return (seats) => {
      for (let seat in seats) {
        if (Number(seats[seat]) < 0) {
          return true;
        }
      }
      return false;
    };
  }, []);

  // Memoized function to check if all seats have a value of zero
  const checkZeroSeatsValidity = useMemo(() => {
    return (seats) => {
      for (let seat in seats) {
        if (Number(seats[seat]) > 0) {
          return false;
        }
      }
      return true;
    };
  }, []);

  // Function to handle the booking process
  const handleBookNow = () => {
    switch (true) {
      case !movie:
        setErrorPopup(true);
        setErrorMessage("Please select a movie!");
        break;
      case !time:
        setErrorPopup(true);
        setErrorMessage("Please select a time slot!");
        break;
      case checkNegativeSeatsValidity(noOfSeat) || checkZeroSeatsValidity(noOfSeat):
        setErrorPopup(true);
        setErrorMessage("Invalid Seats!");
        break;
      default:
        handlePostBooking();
        changeNoOfSeats({}); // Reset seats after booking
    }
  };

  /* 
    The component renders UI components:
    - Model: Error modal component
    - SelectMovie: Component for selecting a movie
    - LastBookingDetails: Component displaying last booking details
    - TimeShedule: Component for selecting movie timing
    - SelectSeats: Component for selecting the number of seats

    The 'Book Now' button triggers the handleBookNow function onClick.
  */
  return (
    <>
      <Model />
      <div className="container">
        <div className="selection_container">
          <div className="wrapper">
            <div className="select_movie_component">
              <SelectMovie />
            </div>
            <div className="last_booking_details_container">
              <LastBookingDetails />
            </div>
          </div>
          <div className="time_seats_container">
            <TimeShedule />
            <SelectSeats />
            <button
              onClick={() => {
                handleBookNow();
              }}
              className="BN-btn "
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
