import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import GameDetails from "../Pages/GameDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Other from "../Pages/Other";
import Error from "../Pages/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "game-details",
        element: <GameDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "other",
        element: <Other />,
      },
    ],
  },

  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
