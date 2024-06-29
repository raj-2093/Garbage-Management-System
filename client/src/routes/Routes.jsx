import React from "react";
import { useRoutes } from "react-router-dom";
import { Assign } from "../pages/Assign";
import { Home } from "../pages/Home";

export default function Routes() {
  const ele = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/assign", element: <Assign /> },
  ]);
  return ele;
}
