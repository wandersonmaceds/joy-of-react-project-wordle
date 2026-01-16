import React from "react";

import WordForm from "../WordForm";
import GuessResult from "../GuessResult";
import WinnerBanner from "../WinnerBanner";
import LooserBanner from "../LooserBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameResult, setGameResult] = React.useState(null);

  function handleGuessSubmit(guess) {
    setGuesses([...guesses, guess]);

    hasWon = guess === answer && gameResult === null;
    reachedMaxGuesses = guesses.length + 1 === NUM_OF_GUESSES_ALLOWED;

    if (hasWon) {
      setGameResult("winner");
    }

    if (!hasWon && reachedMaxGuesses) {
      setGameResult("looser");
    }
  }

  const result =
    gameResult === null ? null : gameResult === "winner" ? (
      <WinnerBanner guessCount={guesses.length} />
    ) : (
      <LooserBanner answer={answer} />
    );

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <WordForm onSubmit={handleGuessSubmit} />
      {result}
    </>
  );
}

export default Game;
