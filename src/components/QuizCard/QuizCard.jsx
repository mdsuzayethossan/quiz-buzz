import React from "react";

const QuizCard = ({ question, questionsIndex }) => {
  const { options } = question;
  const handleQuestionCheck = () => {};
  return (
    <div className="mx-auto max-w-xl shadow p-10 rounded-xl my-7 relative">
      <span className="absolute right-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </span>
      <h3 className="font-bold text-xl max-w-lg text-left mb-8 text-gray-600">
        <span className="font-bold text-gray-700 mr-2">
          Question {questionsIndex + 1}:
        </span>{" "}
        {question.question}
      </h3>

      {options.map((option) => (
        <div
          onClick={() => handleQuestionCheck(option)}
          className={`form-control shadow rounded-full p-4 mb-5 bg-gray-50`}
        >
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-red-500"
            />
            <span className="ml-7">{option}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default QuizCard;
