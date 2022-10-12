import React, { useContext } from "react";
import Card from "../Card/Card";
import { TopicsDataContext } from "../Layouts/Main";

const Topics = () => {
  const topics = useContext(TopicsDataContext);
  return (
    <div className="container mb-20 mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
      {topics.data.map((topic) => (
        <Card key={topic.id} topic={topic}></Card>
      ))}
    </div>
  );
};

export default Topics;
