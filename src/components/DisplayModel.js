import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const DisplayModel = (props) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 500, m: 1 }}>
      <Typography variant="h6" gutterBottom>
        The markoved story!!
      </Typography>
      <Typography variant="body2" gutterBottom>
        {props.text}
      </Typography>
    </Box>
  );
};

export default DisplayModel;
