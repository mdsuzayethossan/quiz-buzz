import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Main from "./components/Layouts/Main";
import Banner from "./components/Banner/Banner";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import QuizCard from "./components/QuizCard/QuizCard";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/quiz",
          element: <QuizCard></QuizCard>,
        },
        {
          path: "/quiz/:quizId",
          loader: ({ params }) =>
            fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            ),
          element: <Quiz></Quiz>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
