import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Main from "./components/Layouts/Main";
import Banner from "./components/Banner/Banner";
import Error from "./components/Error/Error";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Banner></Banner>,
        },
        {
          path: "/home",
          element: <Banner></Banner>,
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
