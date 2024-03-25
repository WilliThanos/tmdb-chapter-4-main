import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import MoviePopuler from "./Rizal/MoviePopuler.jsx"


export default function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Home />,
    // },
    {
      path: "/",
      element: <MoviePopuler />,
    },
  ]);

  return <RouterProvider router={router} />;
}