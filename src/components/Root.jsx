import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export const quizContext = createContext();
const Root = () => {
  const quizData = useLoaderData();
  return (
    <div>
      <quizContext.Provider value={quizData}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </quizContext.Provider>
    </div>
  );
};

export default Root;
