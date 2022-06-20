import { Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function TopicBox({ topic }) {
  return (
    <div
      style={{
        padding: "16px",
        minWidth: "120px",
        border: "1.2px solid #e7e7e7",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Link to={`/questions/${topic}`} style={{color: "#222", textDecoration: "none", fontWeight: "600"}}>
        {topic}
      </Link>
    </div>
  );
}

export default TopicBox;
