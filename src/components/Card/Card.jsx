import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ topic }) => {
  const topicNavigate = useNavigate();
  const handleStartPractice = () => {
    topicNavigate(`/quiz/${topic.id}`);
  };
  return (
    <div className="card bg-gray-200 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={topic.logo} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{topic.name}</h2>
        <div className="indicator">
          <span className="indicator-item badge badge-primary border-2 px-3 border-gray-200 font-semibold">
            {topic.total}
          </span>
          <button
            onClick={handleStartPractice}
            className="btn px-6 btn-primary py-2 text-white rounded-full border-2 border-red-500 focus:outline-none"
          >
            Start Practice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
