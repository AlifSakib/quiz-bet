import { faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-toastify";

const QuizQuestion = ({ question }) => {
  console.log(question);
  const { question: qstn, correctAnswer, options } = question;
  const [toggle, setToggle] = useState(false);

  const checkCorrect = (selectedOption) => {
    if (selectedOption === correctAnswer) {
      return toast.success("Congratulation ! Correct Answer .", {
        autoClose: 1500,
      });
    } else {
      return toast.error("Wrong Answer ! Please Try Again", {
        autoClose: 1500,
      });
    }
  };

  const showAnswer = () => {
    setToggle(!toggle);
  };

  return (
    <div className="border my-10 relative">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Question
            </p>
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: qstn }}
          ></div>
        </div>
        {options.map((option, index) => (
          <div
            onClick={(e) => checkCorrect(e.target.innerText)}
            key={index}
            className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl"
          >
            <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-purple-400 hover:border-deep-purple-accent-400 mb-4">
              <div className="mr-2">
                <svg
                  className="w-6 h-6 transition-colors duration-200 text-purple-400 group-hover:text-white sm:w-8 sm:h-8"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
                {option}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={showAnswer}
        className="hover:text-emerald-700 text-pink-600 absolute top-10 right-10 text-lg"
      >
        {toggle ? (
          <div className="bg-black px-6 py-1 rounded-full text-white">
            <button>{correctAnswer}</button>
          </div>
        ) : (
          <button>
            <FontAwesomeIcon icon={faEyeLowVision}></FontAwesomeIcon>
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;
