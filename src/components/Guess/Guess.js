import React from "react";

import { range } from "../../utils";

function Guess({ word }) {
  const columns = range(0, 5).map((_) => "");
  const letters = word ? word.split("") : columns;
  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span key={index} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
