import { Grid } from "@mui/material";
import React from "react";

// this infobox is what goes on question views and it renders information about the column to which it corresponds
function InfoBox({
  columnName,
  number,
  bgColor,
  colorPassedDown,
  numColor,
}) {
  return (
    <Grid
      container
      sx={{
        backgroundColor: `${bgColor}`,
        padding: "12px",
        height: "100px",
        borderRadius: "12px",
      }}
    >
      <Grid
        container
        lg="12"
        sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <Grid
          item
          sx={{ fontWeight: "800", fontSize: "22px", color: numColor }}
        >
          {number}
        </Grid>
        <Grid item sx={{ color: colorPassedDown }}>
          {columnName}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default InfoBox;
