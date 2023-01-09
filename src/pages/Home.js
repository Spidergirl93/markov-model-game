import { Fragment, useState } from "react";

import Header from "../components/Header";
import Form from "../components/Form";
import DisplayModel from "../components/DisplayModel";

const Home = (props) => {
  const [modeledStory, setModeledStory] = useState("");

  const storyHandler = (txt) => {
    const generatedStory = markovGenerator(txt, 10);
    setModeledStory((prev) => generatedStory);
  };

  const markovGenerator = (txt, order = 3) => {
    let ngrams = {};
    const parsedTxt = txt.match(/\b(\w+)\b/g);

    for (let i = 0; i < parsedTxt.length; i++) {
      let word = parsedTxt[i];
      if (!ngrams[word]) {
        ngrams[word] = [];
      }
      // Add the next 10 words as the possible next states
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

    // The length of the generated text is defined here by
    // setting the number of times that this loop occurs
    for (let i = 0; i < parsedTxt.length; i++) {
      // Get the possible next states
      let possibilities = ngrams[currentWord];
      // To prevent printing just random numbers
      if (!possibilities) {
        break;
      }
      // Pick a random element from the possible next transitions
      let index = Math.floor(Math.random() * possibilities.length);
      let next = possibilities[index];
      result += next;
      // Get the last word of result
      currentWord = result.trim().split(" ").pop();
      console.log(result);
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
