import React from "react";

import WordForm from "../WordForm";
import GuessResult from "../GuessResult";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuessSubmit(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <WordForm onSubmit={handleGuessSubmit} />
    </>
  );
}

export default Game;
