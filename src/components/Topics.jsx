import React, { useContext } from "react";
import { quizContext } from "./Root";
import Topic from "./Topic";

const Topics = () => {
  const data = useContext(quizContext);
  const quizData = data.data;

  return (
    <div className="mt-10">
      <h1 className="font-bold md:text-5xl text-3xl font-poppins mb-10">
        Topics you might like
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 w-9/12 mx-auto gap-10">
        {quizData.map((quiz) => (
          <Topic key={quiz.id} quiz={quiz}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
