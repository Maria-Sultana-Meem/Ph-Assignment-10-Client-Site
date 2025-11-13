import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, setUser, signoutUserFunc } = useContext(AuthContext);

 
  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
        setDropdownOpen(false);
      })
      .catch((e) => toast.error(e.message));
  };

  
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 border-b-orange-500 border-b-2"
            : ""
        }
      >
        <p className="hover:border-b-2 hover:border-b-orange-500">Home</p>
      </NavLink>

      <NavLink
        to="/allJobs"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 border-b-orange-500 border-b-2"
            : ""
        }
      >
        <p className="hover:border-b-2 hover:border-b-orange-500">All Jobs</p>
      </NavLink>

      {user && (
        <>
          <NavLink
            to="/addJob"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 border-b-orange-500 border-b-2"
                : ""
            }
          >
            <p className="hover:border-b-2 hover:border-b-orange-500">Add a Job</p>
          </NavLink>

          <NavLink
            to="/acceptTask"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 border-b-orange-500 border-b-2"
                : ""
            }
          >
            <p className="hover:border-b-2 hover:border-b-orange-500">
              My Accepted Task
            </p>
          </NavLink>

          <NavLink
            to="/myAddedJob"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 border-b-orange-500 border-b-2"
                : ""
            }
          >
            <p className="hover:border-b-2 hover:border-b-orange-500">
              My Added Job
            </p>
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="bg-orange-300 shadow-sm fixed top-0 left-0 z-50 w-full">
      <div className="navbar w-11/12 md:w-10/12 mx-auto">
     
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold"
          >
            <span className="text-orange-400">Freelance</span> MarketPlace
          </Link>
        </div>

       
        <div className="navbar-center hidden lg:flex">
          <ul className="menu flex justify-center items-center gap-5 menu-horizontal px-1">
            {links}
          </ul>
        </div>

        
        <div className="navbar-end flex items-center gap-3 relative">
          {user ? (
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                className="h-[35px] w-[35px] md:h-[45px] md:w-[45px] rounded-full cursor-pointer"
                alt={user?.displayName}
                onClick={() => setDropdownOpen(!dropdownOpen)} // mobile click
              />

             
              <div
                className={`absolute right-0 mt-2 w-44 bg-white shadow-md rounded-md p-3 z-10 transform transition-all duration-200 ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <p className="text-gray-700 font-semibold text-center mb-2">
                  {user?.displayName}
                </p>
                <button
                  onClick={handleSignout}
                  className="w-full bg-orange-400 text-white py-1 rounded-md hover:bg-orange-500 transition"
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:border-b-2 hover:border-b-orange-500"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:border-b-2 hover:border-b-orange-500"
              >
                Register
              </Link>
            </>
          )}

          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
