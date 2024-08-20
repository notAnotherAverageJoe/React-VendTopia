import React from "react";
import { Link } from "react-router-dom";

function Snack2() {
  return (
    <div className="snack">
      <h2>Water</h2>
      <p>Hydrate or die!</p>

      <iframe
        src="https://giphy.com/embed/3ohhwF34cGDoFFhRfy"
        width="200"
        height="200"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
        title="Hydrate GIF"
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/hulu-scared-3ohhwF34cGDoFFhRfy">
          via GIPHY
        </a>
      </p>

      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack2;
