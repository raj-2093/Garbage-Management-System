import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <nav className="NavBar">
        <h1>Home</h1>
        <div>
            <Link to="/Assign" className="NavLink">Assign</Link>
            <Link to="/Schedule" className="NavLink">Schedules</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
