import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

const Form = (props) => {
  const [userInput, setUserInput] = useState("");

  const onChangeHandler = (e) => {
    setUserInput((prev) => e.target.value);
  };

  const clickHandler = () => {
    props.getStory(userInput);
  };

  return (
    <div>
      <Box sx={{ width: "60%", m: 1 }}>
        <Typography variant="h4" gutterBottom>
          Markov Model
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          A Markov Model models the current state of the system using the
          previous states. The model used in this application is based on Markov
          chain which is the simplest type of Markov Model. Based on Markov
          chain, the current distribution for a variable is only based on its
          distrubution on the previous states. here you can add any text and our
          model will generate a story based on the words existing in the text
          (nodes), and the words that are followed by them (transitions). Enjoy!
        </Typography>
      </Box>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "60%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-textarea"
          label="Please insert your text here"
          placeholder="Your Text"
          multiline
          value={userInput}
          onChange={onChangeHandler}
        />
      </Box>
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        sx={{ m: 1 }}
        onClick={clickHandler}
      >
        Do Magic
      </Button>
    </div>
  );
};

export default Form;
