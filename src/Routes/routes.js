import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Root from "../components/Root";
import Topics from "../components/Topics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/topics",
        element: <Topics></Topics>,
      },
      {
        path: "/quiz/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
        element: <Quiz></Quiz>,
      },
    ],
  },
]);
