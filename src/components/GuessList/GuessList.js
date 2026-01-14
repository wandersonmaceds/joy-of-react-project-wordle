import React from "react";

function GuessList({ guesses = ["Words", "Sored", "Scoop"] }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <p key={`${guess}-${index}`} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
