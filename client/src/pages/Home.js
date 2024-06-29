import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import FileUpload from "../components/FileUpload";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="Container">About us</div>

        <div className="Container">
          <Link to="/Gallery" className="NoLink">
            Previous Cleanups
          </Link>
        </div>

        <div className="Container">New Cleanup Schedules</div>

        <div className="Container">
          <Link to="/SignUp" className="NoLink">
            Join as a garbage collector volueenteer
          </Link>
        </div>

        <div className="Container">
          Upload Images:
          <FileUpload />
        </div>
      </div>
    </>
  );
};
