import { Fragment, useState } from "react";

import Header from "../components/Header";
import Form from "../components/Form";
import DisplayModel from "../components/DisplayModel";

const Home = (props) => {
  const [modeledStory, setModeledStory] = useState("");

  const storyHandler = (txt) => {
    const generatedStory = markovGenerator(txt);
    setModeledStory((prev) => generatedStory);
  };

  const markovGenerator = (txt, order = 3) => {
    let ngrams = {};
    for (let i = 0; i <= txt.length - order; i++) {
      let gram = txt.substring(i, i + order);

      if (!ngrams[gram]) {
        ngrams[gram] = [];
      }
      //Duplicates here are in our favor since the more an item is, the higher chance it has to get picked
      ngrams[gram].push(txt.charAt(i + order));
    }
    let currentGram = txt.substring(0, order);
    let result = currentGram;

    // Do this 10 times to get a longer text as the result
    for (let i = 0; i < 1000; i++) {
      // Get the possible next states
      let possibilities = ngrams[currentGram];
      // Pick a random element from the possible next transitions
      let index = Math.floor(Math.random() * possibilities.length);
      let next = possibilities[index];
      result += next;
      currentGram = result.substring(result.length - order);
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
