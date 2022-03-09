import React from "react"
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Greeting from "./Greeting";
import store from "../redux/store";


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="greeting" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
