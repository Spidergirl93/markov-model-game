import { Fragment, useState } from "react";

import Form from "../components/homeComponents/input/Form";
import DisplayModel from "../components/homeComponents/result/DisplayModel";

const Home = (props) => {
  const [modeledStory, setModeledStory] = useState("");
  const storyHandler = (story) => {
    console.log(story);
    setModeledStory((prev) => story);
  };

  return (
    <Fragment>
      <Form getStory={storyHandler} />
      <DisplayModel text={modeledStory} />
    </Fragment>
  );
};

export default Home;
