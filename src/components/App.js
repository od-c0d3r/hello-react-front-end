import React from "react"
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Greeting from "./Greeting";
import store from "../redux/store";


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
