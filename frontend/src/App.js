import React from "react";
import "./App.css";
import BsState from "./context/State"; // Importing BsState component to provide context
import Home from "./components/pages/Home"; // Importing the Home component

function App() {
  return (
    <>
      {/* Wrapping the entire application with BsState to provide context */}
      <BsState>
        {/* Rendering the Home component, which contains the main application logic */}
        <Home />
      </BsState>
    </>
  );
}

export default App;
