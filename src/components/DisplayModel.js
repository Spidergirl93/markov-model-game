import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const DisplayModel = (props) => {
  return (
    <Box sx={{ width: "60%", m: 1 }}>
      <Typography variant="h6" gutterBottom>
        Generated Story:
      </Typography>
      <Typography variant="body2" gutterBottom>
        {props.text}
      </Typography>
    </Box>
  );
};

export default DisplayModel;
