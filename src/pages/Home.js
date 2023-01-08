import { Fragment } from "react";

import Form from "../components/homeComponents/input/Form";
import DisplayModel from "../components/homeComponents/result/DisplayModel";

const Home = (props) => {
  const storyHandler = (story) => {
    console.log(story);
  };

  return (
    <Fragment>
      <Form getStory={storyHandler} />
      <DisplayModel />
    </Fragment>
  );
};

export default Home;
