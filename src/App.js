import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Main from "./components/Layouts/Main";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./components/Blog/Blog";
import Statistics from "./components/Statistics/Statistics";
import Topics from "./components/Topics/Topics";
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
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
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
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
