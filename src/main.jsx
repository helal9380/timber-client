/** @format */

import React from "react";
import ReactDOM from "react-dom/client";

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
import Details from "./Details.jsx";
import Privateroute from "./LayOut/PrivateRoute.jsx";
import Update from "./Componnets/Update.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Category from "./Componnets/Category.jsx";
import CategoryDetails from "./Componnets/CategoryDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/addArt'),
      },
      {
        path: '/addArt/:id',
        element: <Privateroute><Details></Details></Privateroute>,
        loader: ({params}) => fetch(`http://localhost:5000/addArt/${params.id}`)
      },
      {
        path: '/subcategory',
        element: <AllArtCraft></AllArtCraft>,
        loader: () => fetch('http://localhost:5000/subcategory/')
      },
      {
        path: '/categorydetails/:id',
        element:<CategoryDetails></CategoryDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/categorydetails/${params.id}`)
      },
      {
        path: "/add_art",
        element: <Privateroute><AddArt></AddArt></Privateroute>,
      },
      {
        path:"/category/:id",
        element:<Category></Category>,
        loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
      },
      {
        path: "/all_art",
        element: <AllArtCraft></AllArtCraft>,
        loader: () => fetch('http://localhost:5000/addArt'),
      },
      {
        path: '/update/:id',
        element:<Privateroute><Update></Update></Privateroute>,
        loader: ({params}) => fetch(`http://localhost:5000/art/${params.id}`)
      },
      {
        path: "/myArt",
        element: <Privateroute><MyArt></MyArt></Privateroute>,
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
