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
      ngrams[gram].push(txt.charAt(i + order));
    }
    console.log(ngrams);
    return "nothing for now";
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
