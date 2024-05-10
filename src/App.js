import React from "react";
import Register,{action as RegisterAction} from "./Component/Register";
import Home from "./Component/Home";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Component/Root";
import "./App.css";
import Login, { action as LoginAction } from "./Component/Login";
import { RouterProvider } from "react-router";
import Error from "./Component/ErrorPage";
import ErrorPage from "./Component/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/Register", element: <Register />,action:RegisterAction },
        { path: "/Login", element: <Login />, action: LoginAction },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
