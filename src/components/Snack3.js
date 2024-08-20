import React from "react";
import { Link } from "react-router-dom";

function Snack3() {
  return (
    <div className="snack">
      <h2>🥔 Chips 🥔</h2>
      <p>A bag of chips</p>
      <p>🥔</p>
      <p>🥔</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack3;
