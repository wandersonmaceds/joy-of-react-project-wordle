import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const results = guess
    ? checkGuess(guess, answer)
    : range(0, 5).map((_) => "");

  return (
    <p className="guess">
      {results.map((result, index) => (
        <span key={index} className={`cell ${result.status ?? ""}`}>
          {result.letter ?? ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
