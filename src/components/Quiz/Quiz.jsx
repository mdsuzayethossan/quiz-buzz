import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";
const Quiz = () => {
  const quiz = useLoaderData();
  const [correctAns, SetCorrectAns] = useState(0);
  return (
    <div className="container">
      <h2 className="font-bold text-2xl mt-10 text-primary">
        Quiz of {quiz.data.name}
      </h2>
      <h4 className="font-semibold xl mt-5">
        {correctAns > 0 ? `Correct Answer: ${correctAns}` : ""}
      </h4>
      <div className="quiz-container">
        {quiz.data.questions.map((question, questionsIndex) => (
          <QuizCard
            question={question}
            key={question.id}
            questionsIndex={questionsIndex}
            correctAns={correctAns}
            SetCorrectAns={SetCorrectAns}
          ></QuizCard>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
