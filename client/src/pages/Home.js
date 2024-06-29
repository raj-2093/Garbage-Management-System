import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import FileUpload from "../components/FileUpload";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="Container">
          <h3>Introduction</h3>
          <span>&emsp;</span> Our Garbage Management System represents a
          groundbreaking approach to waste handling within communities. It
          integrates cutting-edge technology to redefine the efficiency and
          sustainability of waste collection and disposal processes. Our primary
          goal is to promote sustainable living practices by optimizing waste
          reduction, enhancing recycling efforts, and significantly reducing
          environmental impact. At the core of our system is a sophisticated
          platform that enables real-time tracking, scheduling, and
          comprehensive reporting capabilities. This ensures that waste
          management operations are not only streamlined but also transparent
          and accountable. By implementing our innovative solutions, communities
          can embrace a cleaner, greener future, contributing to environmental
          preservation and enhanced quality of life for all residents.
          <br />
          <br />
          <span>&emsp;</span>Join us in revolutionizing the way we manage waste,
          setting a new standard in environmental stewardship and community
          well-being with our advanced Garbage Management System. Together, we
          can make a significant difference in creating a more sustainable world
          for generations to come.
        </div>

        <div className="Container">
          <Link to="/Gallery" className="NoLink">
            <h3>Previous Cleanups</h3>
          </Link>
          <span>&emsp;</span> In our city, we have a proud history of commitment
          to environmental stewardship through regular cleanup initiatives.
          These efforts have seen our community come together to beautify public
          spaces, remove litter, and promote a cleaner environment for all
          residents. Through collaborative events and partnerships with local
          businesses and volunteers, we have successfully organized numerous
          cleanup campaigns that have made a tangible difference in preserving
          our city’s natural beauty and fostering a sense of pride among its
          residents.
        </div>

        <div className="Container">
          <h3>New Cleanup Schedules</h3>
        </div>

        <div className="Container">
          <Link to="/SignUp" className="NoLink">
            <h3>Join as a garbage collector volueenteer</h3>
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
