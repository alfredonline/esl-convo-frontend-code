import { Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function TopicBox({ topic }) {
  return (
    <div
      style={{
        padding: "12px",
        minWidth: "120px",
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        borderRadius: "12px",
        backgroundColor: "#20123a",
        textAlign: "center",
      }}
    >
      <Link to={`/questions/${topic}`} style={{color: "#fff", textDecoration: "none"}}>
        {topic}
      </Link>
    </div>
  );
}

export default TopicBox;
