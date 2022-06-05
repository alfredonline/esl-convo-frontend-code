import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import navItems from "../Data/NavigationItems";

function NavigationBar() {
  return (
    <div className="navWrapper">
      <Grid
        sx={{
          padding: "12px",
          height: "10vh",
          width: "90%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)",
        }}
        container
      >
        <Grid
          item
          sx={{
            fontWeight: "600",
            fontSize: "20px",
            color: "#222",
            width: "200px",
          }}
          lg="10"
        >
          <Link to="/" className="removeLinkStyles">ESLConvo</Link>
        </Grid>
        <Grid item spacing="20px" sx={{ display: "flex", gap: "10px" }} lg="2">
          {navItems.map((item) => {
            return (
              <Grid item lg="12">
                <Link to={`${item.link}`} className="removeLinkStyles">
                  {item.text}
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export default NavigationBar;
