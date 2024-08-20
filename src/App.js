import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from "./components/VendingMachine";
import Snack1 from "./components/Snack1";
import Snack2 from "./components/Snack2";
import Snack3 from "./components/Snack3";
import "./components/VendingMachine.css";
import "./components/Snacks.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/snickers" element={<Snack1 />} />
          <Route path="/water" element={<Snack2 />} />
          <Route path="/chips" element={<Snack3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
