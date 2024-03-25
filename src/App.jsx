import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import NowPlaying from "./Farrel/NowPlaying.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Np",
      element: <NowPlaying />,
    },
  ]);

  return <RouterProvider router={router} />;
}
