import { Fragment, useState } from "react";

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
      <Form getStory={storyHandler} />
      <DisplayModel text={modeledStory} />
    </Fragment>
  );
};

export default Home;
