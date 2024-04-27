/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./LayOut/Main.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AllArtCraft from "./pages/AllArtCraft.jsx";
import MyArt from "./pages/MyArt.jsx";
import AddArt from "./pages/AddArt.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add_art",
        element: <AddArt></AddArt>,
      },
      {
        path: "/all_art",
        element: <AllArtCraft></AllArtCraft>,
      },
      {
        path: "/my_art",
        element: <MyArt></MyArt>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
