import React, { useContext } from "react";
import Card from "../Card/Card";
import { TopicsDataContext } from "../Home/Home";

const Topics = () => {
  const topics = useContext(TopicsDataContext);
  return (
    <div className="container grid grid-cols-3 mt-10 gap-10">
      {topics.data.map((topic) => (
        <Card key={topic.id} topic={topic}></Card>
      ))}
    </div>
  );
};

export default Topics;
