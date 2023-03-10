import { Fragment, useState } from "react";

import Header from "../components/Header";
import Form from "../components/Form";
import DisplayModel from "../components/DisplayModel";

const Home = (props) => {
  const [modeledStory, setModeledStory] = useState("");

  const storyHandler = (txt) => {
    const generatedStory = markovGenerator(txt, 8);
    setModeledStory((prev) => generatedStory);
  };

  const markovGenerator = (txt, order) => {
    let ngrams = {};
    const parsedTxt = txt.match(/\b(\w+)\b/g);

    for (let i = 0; i < parsedTxt.length; i++) {
      let word = parsedTxt[i];
      if (!ngrams[word]) {
        ngrams[word] = [];
      }
      // Add the next 8 words as the possible next states
      // Having duplicates in this part is actually in our
      // favor since it increases the chance of the duplicted
      // word to be picked in the next part, therefore we don't
      // do anything to handle duplicates here
      let nextState = "";
      for (let j = 1; j < order; j++) {
        const index = i + j;
        if (index < parsedTxt.length) {
          nextState += " " + parsedTxt[index] + " ";
        }
      }
      ngrams[word].push(nextState);
    }

    // Start text generation with the first word
    let currentWord = parsedTxt[0];
    let result = currentWord;

    // The text will get generated until it reaches
    // to the last word in the input test
    let counter = 1;
    for (;;) {
      // Get the possible next states
      let possibilities = ngrams[currentWord];
      // To prevent printing just random numbers
      if (!possibilities || possibilities[0] === "") {
        break;
      }
      // Pick a random element from the possible next transitions
      let index = Math.floor(Math.random() * possibilities.length);
      let next = possibilities[index];
      result += next;
      // Get the last word of result
      currentWord = result.trim().split(" ").pop();
      console.log(
        "The generated story in the ",
        counter,
        "th iteration:\n",
        result
      );
      console.log("The node in the next iterarion: \n", currentWord);
      counter++;
    }

    return result;
  };

  return (
    <Fragment>
      <Header />
      <Form getStory={storyHandler} />
      {modeledStory !== "" ? (
        <DisplayModel text={modeledStory} />
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

export default Home;
