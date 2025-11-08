import React, {  useContext, useEffect, useState } from 'react';
import { FaHome, FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { FaGear } from 'react-icons/fa6';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import toast from 'react-hot-toast';



const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")
  const { user, setUser ,signoutUserFunc} = useContext(AuthContext);

   const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  useEffect(() => {
    const html = document.querySelector('html')
     html.setAttribute("data-theme", theme)
     localStorage.setItem("theme", theme)
  }, [theme])


  const handleTheme = (checked) => {
    setTheme(checked ? "dark": "light")
  }
    const links = <>
    
<NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "text-white btn btn-primary" : ""
  }
>
 Home
</NavLink>
<NavLink
  to="/allJobs"
  className={({ isActive }) =>
    isActive ? "text-white btn-primary btn" : ""
  }
>
  All Jobs
</NavLink>
{/* logged in */}
 {user && (
        <>
          <NavLink
            to="/addJob"
            className={({ isActive }) =>
              isActive ? "btn btn-primary text-white" : ""
            }
          >
            Add a Job
          </NavLink>

          <NavLink
            to="/acceptTask"
            className={({ isActive }) =>
              isActive ? "btn btn-primary text-white" : ""
            }
          >
            My Accepted Tasks
          </NavLink>
        </>
      )}
 
    </>
    return (
        <div className='bg-base-100 shadow-sm fixed top-0 left-0 z-50 w-full'>
            <div className="navbar w-11/12 md:w-10/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xs md:text-xl ">Freelance MarketPlace</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu flex justify-center items-center gap-5 menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-2">
     

            <div className="relative group ">
            {
            user?  <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                className=" h-[25px] w-[25px] md:h-[45px] md:w-[45px] lg:h-[45px] lg:w-[45px] rounded-full mx-auto"
                alt={user?.displayName}
              /> : null
          }
          <div className="absolute bottom-full top-5   right-0  opacity-0 group-hover:opacity-100 transition-opacity  text-red-500 text-sm px-2 py-1 rounded">
                  {user?.displayName}
                </div>
          </div>
           {
          user?  <button onClick={handleSignout}
            
            className="  hover:scale-110  transition-all duration-300  px-3 py-1 rounded-md "
          >
            Log Out
          </button>:
           (
            <>
              <Link
                to="/login"
                className=""
              >
                 Login
              </Link>
              <Link
                to="/register"
                className=""
              >
                Register
              </Link>
            </>
          )
         }
    <input
           onChange={(e)=> handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>
  </div>
</div>
        </div>
    );
};

export default Navbar;