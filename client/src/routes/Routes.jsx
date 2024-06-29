import React from "react";
import { useRoutes } from "react-router-dom";
import { Assign } from "../pages/Assign";
import { Home } from "../pages/Home";
import { Schedule } from "../pages/Schedule";
import { Gallery } from "../pages/Gallery";

export default function Routes() {
  const ele = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/assign", element: <Assign /> },
    { path: "/schedule", element: <Schedule /> },
    { path: "/gallery", element:<Gallery />}
  ]);
  return ele;
}
