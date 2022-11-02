import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow ">
      <div className="container">
        <div className="navbar">
          <div className="flex-1">
            <NavLink
              to="/"
              className="btn btn-ghost font-bold normal-case hover:bg-transparent text-xl text-primary"
            >
              QuizBuzz
            </NavLink>
          </div>
          <div className="flex-none">
            <div className="hidden md:block">
              <ul className="flex gap-8 font-semibold">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                    to="/statistics"
                  >
                    Statistics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                    to="/topics"
                  >
                    Topics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                    to="/practice"
                  >
                    Practice
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                    to="/try-it"
                  >
                    Try It
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown dropdown-end md:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.ibb.co/2ZmhjwQ/md-suzayet-hossan.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/statistics">Statistics</NavLink>
                </li>
                <li>
                  <NavLink to="/topics">Topics</NavLink>
                </li>
                <li>
                  <NavLink to="/practice">Practice</NavLink>
                </li>
                <li>
                  <NavLink to="/try-it">Try It</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
