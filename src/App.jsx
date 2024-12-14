import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SecondaryNavBar from "./components/SecondaryNavBar";
import ConsentForm from "./components/ConsentForm";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <SecondaryNavBar></SecondaryNavBar>
      <ConsentForm></ConsentForm>
    </div>
  );
};

export default App;
