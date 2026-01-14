import React from "react";

function WordForm() {
  const [word, setWord] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(word);
    setWord("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern="\w{5,5}"
        title="fill in with a 5 letters word to continue"
        value={word}
        onChange={(evt) => setWord(evt.target.value.toUpperCase())}
      />
    </form>
  );
}

export default WordForm;
