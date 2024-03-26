import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import SearchWilli from "./William/SearchWilli";

export default function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Home />,
    // },
    {
      path: "/",
      element: <SearchWilli />,
    },
  ]);

  return <RouterProvider router={router} />;
}