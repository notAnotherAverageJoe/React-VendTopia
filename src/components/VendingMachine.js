import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div className="vending-machine">
      <br></br>
      <br></br>
      <h1>Vendtopia</h1>
      <p>Please make a selection: </p>
      <ul>
        <li>
          <Link to="/snickers">Snickers Bar</Link>
        </li>
        <li>
          <Link to="/water">Water</Link>
        </li>
        <li>
          <Link to="/chips">Chips</Link>
        </li>
      </ul>
    </div>
  );
}

export default VendingMachine;
