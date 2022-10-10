import Lottie from "lottie-react";
import React from "react";
import { useRouteError } from "react-router-dom";
import render from "../assets/showerror.json";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <div className="flex justify-center">
        <Lottie animationData={render} loop={true}></Lottie>
      </div>
      <div className="text-4xl italic">
        <h1>
          Error Status :{" "}
          <span className="text-red-600">
            {error.statusText || error.message}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default ErrorPage;
