import React from "react";
import Header from "../Components/Header";
import TopicBox from "../Components/TopicBox";

function TopicsView({ topicsArr }) {
  return (
    <div className="TopicsViewWrapper">
      <Header sx={{padding: "12px"}}>ESLConvo conversation topics</Header>
      <div className="TopicsView">
        {topicsArr.map((item) => {
          return <TopicBox topic={item.topic} />;
        })}
      </div>
    </div>
  );
}

export default TopicsView;
