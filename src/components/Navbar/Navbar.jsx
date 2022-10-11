import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    
    <nav className="bg-white shadow ">
    <div className="container">
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">QuizBuzz</a>
        </div>
        <div className="flex-none">
            <div className="hidden md:block">
                <ul className="flex gap-8 font-semibold">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/statistics">Statistics</NavLink></li>
                    <li><NavLink to="/topics">Topics</NavLink></li>
                </ul>
            </div>
            
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar