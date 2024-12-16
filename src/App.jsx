import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SecondaryNavBar from "./components/SecondaryNavBar";
import ConsentScreen from "./components/ConsentScreen";
import InputForm from "./components/InputForm";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <SecondaryNavBar></SecondaryNavBar>
      {/* <ConsentScreen></ConsentScreen> */}
      <InputForm></InputForm>
    </div>
  );
};

export default App;
