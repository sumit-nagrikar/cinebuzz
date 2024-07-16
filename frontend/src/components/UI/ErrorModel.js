import React, { useContext } from "react";
import BsContext from "../../context/Context"; // Importing context
import "../styles/errorModel.css"; // Importing CSS for styling

function Model(props) {
  const context = useContext(BsContext); // Getting context data
  const { errorPopup, errorMessage, setErrorPopup, setErrorMessage } = context; // Destructuring context values

  // Function to close the error modal
  const handleClosePopup = () => {
    setErrorMessage(""); // Clear error message
    setErrorPopup(false); // Set error popup to false to hide modal
  };

  // Rendering the error modal
  return (
    <>
      {errorPopup && ( // Conditionally render modal if errorPopup is true
        <div className={`modal-container ${errorPopup ? "active" : "inactive"}`}>
          <div className="modal">
            <div className="modal-header">
              <strong>Message</strong> {/* Header with 'Message' text */}
            </div>
            <div className="modal-body">
              <span>{errorMessage}</span> {/* Display error message */}
            </div>
            <div className="modal-footer">
              <button onClick={handleClosePopup}>Close</button> {/* Close button */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Model;
