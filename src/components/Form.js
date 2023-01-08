import { useState } from "react";

import Box from "@mui/material/Box";
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
          label="Please insert your story here"
          placeholder="Your Story"
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
