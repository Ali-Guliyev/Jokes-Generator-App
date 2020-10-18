import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";

const useStyles = makeStyles({
  button: {
    backgroundColor: "purple",
    color: "yellow",
  },
});

const API_URL =
  "https://official-joke-api.appspot.com/random_joke";

function App() {
  const [joke, setJoke] = useState({
    // text: "Here Goes the joke",
    question: "",
    answer: "",
    type: "",
  });
  const classes = useStyles();

  const changeJoke = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setJoke({
          question: `- ${data.setup}`,
          answer: `- ${data.punchline}`,
          type: data.type,
        });
      });
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Jokes Generator</h1>
        <div className="app__jokeTypeContainer">
          <p>Joke Type: </p>
          <b>
            <i>{joke.type}</i>
          </b>
        </div>
        <div className="app__jokeContainer">
          <p>{joke.question}</p>
          <p>{joke.answer}</p>
        </div>
        <Button
          onClick={changeJoke}
          className={classes.button}
        >
          Generate Joke 😂
        </Button>
      </div>
    </div>
  );
}

export default App;
