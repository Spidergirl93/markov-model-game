import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import ModelTrainingIcon from "@mui/icons-material/ModelTraining";

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="m">
        <Toolbar disableGutters>
          <ModelTrainingIcon sx={{ mr: 1 }} />
          <Typography
            size="large"
            edge="start"
            color="inherit"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Story Teller
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
