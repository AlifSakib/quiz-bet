import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Topic = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  const navigate = useNavigate();
  const startQuiz = () => {
    navigate(`/quiz/${id}`);
  };
  return (
    <div>
      <div className="flex flex-col h-full shadow-lg">
        <img className="bg-purple-500 rounded-t-lg" src={logo} alt="" />
        <div className="flex-grow border border-t-0 rounded-b-lg">
          <div className="p-5 space-y-4">
            <h6 className="mb-2 font-semibold leading-5">{name}</h6>
            <h6>Total Task : {total}</h6>
            <button
              className="w-full bg-purple-200 py-1 flex items-center justify-center space-x-4"
              onClick={startQuiz}
            >
              <p>Start Quiz</p>
              <FontAwesomeIcon
                className="text-violet-600"
                icon={faArrowAltCircleRight}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
