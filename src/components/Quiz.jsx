import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "./QuizQuestion";

const Quiz = () => {
  const quiz = useLoaderData();
  const questions = quiz.data.questions;
  return (
    <div className="w-9/12 mx-auto">
      {questions.map((question) => (
        <QuizQuestion key={question.id} question={question}></QuizQuestion>
      ))}
    </div>
  );
};

export default Quiz;
