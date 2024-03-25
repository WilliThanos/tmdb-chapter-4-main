import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import NowPlaying from "./Farrel/NowPlaying";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/NP",
      element: <NowPlaying />,
    },
  ]);

  return <RouterProvider router={router} />;
}
