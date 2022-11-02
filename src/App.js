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
import Practice from "./components/Practice/Practice";
import StateForm from "./components/StateForm";
import UpdateUser from "./components/UpdateUser";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      loader: async () =>
        await fetch("https://openapi.programming-hero.com/api/quiz"),
      errorElement: <Error></Error>,
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
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/topics",
          element: <Topics></Topics>,
        },
        // {
        //   path: "/practice",
        //   element: <Practice></Practice>,
        //   loader: () => fetch("http://localhost:5000/users"),
        // },
        {
          path: "/try-it",
          element: <StateForm></StateForm>,
          loader: () => fetch("http://localhost:5000/users"),
        },
        {
          path: "/user-update/:id",
          element: <UpdateUser></UpdateUser>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/users/${params.id}`),
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
