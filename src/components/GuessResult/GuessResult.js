import React from "react";

import Guess from "../Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResult({ guesses }) {
  const rows = range(0, NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {rows.map((row) => (
        <Guess key={row} word={guesses[row]} />
      ))}
    </div>
  );
}

export default GuessResult;
