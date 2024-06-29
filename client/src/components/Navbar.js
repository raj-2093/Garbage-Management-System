import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <nav className="NavBar">
        <h1><Link to="/" className="NavLink">Clean And Green</Link></h1>
        <div className="NavItems">
            <Link to="/Assign" className="NavLink">Assign</Link>
            <Link to="/Schedule" className="NavLink">Schedules</Link>
            <Link to="/Gallery" className="NavLink">Gallery</Link>
            <div className="NavSignin">
                <Link to="/Signup" className="NavLink">Sign up</Link>
                <Link to="/Login" className="NavLink">Login</Link>
            </div>
            {/* User Icon incase of logged in user */}
        </div>
      </nav>
      <Outlet />
    </>
  )
}
