import React from "react";
import { Link } from "react-router-dom";

function Snack1() {
  return (
    <div className="snack">
      <h2>Candy</h2>
      <p>Chocolately goodness all in a bar!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack1;
