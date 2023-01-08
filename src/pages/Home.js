import { Fragment, useState } from "react";

import Header from "../components/Header";
import Form from "../components/Form";
import DisplayModel from "../components/DisplayModel";

const Home = (props) => {
  const [modeledStory, setModeledStory] = useState("");
  const storyHandler = (story) => {
    //Do the logic in here later
    setModeledStory((prev) => story);
  };

  return (
    <Fragment>
      <Header />
      <Form getStory={storyHandler} />
      <DisplayModel text={modeledStory} />
    </Fragment>
  );
};

export default Home;
