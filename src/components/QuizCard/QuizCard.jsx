import React from "react";

const QuizCard = ({ question }) => {
  return (
    <div className="mx-auto max-w-xl shadow p-5 rounded-xl">
      <h3 className="font-bold text-2xl max-w-lg mx-auto mb-8 text-gray-600">
        <span className="font-bold text-gray-700 mr-2">Question 1:</span> What
        is your name? My name is Md suzayet hosan
      </h3>
      <div className={`form-control shadow rounded-full p-4 mb-5 bg-gray-50`}>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name={`radio${question.id}`}
            className="radio checked:bg-red-500"
          />
          <span className="ml-7">Red pill heldo sfjso dfskhdso </span>
        </label>
      </div>
    </div>
  );
};

export default QuizCard;
