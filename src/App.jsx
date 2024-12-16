import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import ConsentScreen from "./components/ConsentScreen";
import InputForm from "./components/InputForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<InputForm />}></Route>
            <Route path="input-form" element={<InputForm />}></Route>
            <Route path="consent-screen" element={<ConsentScreen />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
