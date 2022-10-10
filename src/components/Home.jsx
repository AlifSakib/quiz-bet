import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import render from ".././assets/e-learning-platform.json";
import Topics from "./Topics";

const Home = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-quickSand">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Quiz Bet
              </p>
            </div>
            <h2 className="max-w-lg mb-6  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none font-poppins">
              An investment in knowledge
              <br className="" />
              pays the{" "}
              <span className="inline-block text-violet-400 underline underline-offset-4">
                best interest.
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              OH, HEY Dear! <br />
              Welcome to Quiz Bet , Great To Meet You. <br />
              We promise to keep you up to date with the new topics , tell you
              about awesome technologies.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link
              to="/topics"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-emerald-500"
            >
              <span className="mr-3">Explore Topics</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <Lottie animationData={render} loop={true}></Lottie>
        </div>
      </div>
      <Topics></Topics>
    </div>
  );
};

export default Home;
