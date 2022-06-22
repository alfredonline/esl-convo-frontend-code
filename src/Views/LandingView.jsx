import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";

function LandingView() {
  return (
    <Grid container sx={{ padding: "60px", marginTop: "50px" }} justifyContent="center">
      <Grid
        item
        sx={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "center"}}
        lg="6"
        xs="12"
      >
        <Typography
          sx={{ fontWeight: "800", fontSize: "26px", color: "#20123a" }}
        >
          ESLConvo makes your conversation classes go easier.
        </Typography>
        <Typography
          sx={{ fontSize: "14px", color: "#464551", lineHeight: "1.6" }}
        >
          There are over 60 conversation topics to choose from and each topic
          has an abundance of questions related to the topic. ESLConvo provides
          synonyms of the topic as to improve students' vocabulary as well as
          definitions of the topic in order to help students understand how the
          word has different meanings depending on the context.
        </Typography>
        <Button
          variant="disableHoverEffect"
          sx={{
            backgroundColor: "#20123a",
            padding: "12px",
            width: "150px",
            color: "#fff",
            margin: "0 auto"
          }}
        >
          <Link to="/topics" style={{ color: "#fff", textDecoration: "none" }}>
            Get Started
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}

export default LandingView;
