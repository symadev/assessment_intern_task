import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import MainLayout from "./Components/Layout/MainLayout";
import Home from "./Components/Pages/Home";
import SignUp from "./Components/Pages/SignUp";
import Login from "./Components/Pages/Login";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/signup",
        element:<SignUp></SignUp>
      },
      
      
    ]
    }
]);