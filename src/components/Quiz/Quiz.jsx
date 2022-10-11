import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";
const Quiz = () => {
  const quiz = useLoaderData();
  return (
    <div className="container">
      <h2 className="font-bold text-2xl mt-10 text-primary">
        Quiz of {quiz.data.name}
      </h2>
      <div className="quiz-container">
        {/* {quiz.data.questions.map((question) => (
          <QuizCard question={question} key={question.id}></QuizCard>
        ))} */}
      </div>
    </div>
  );
};

export default Quiz;
