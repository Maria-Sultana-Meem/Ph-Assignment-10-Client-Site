import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const DashboardLayout = () => {
  const { user, signoutUserFunc } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signoutUserFunc();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen bg-gray-100">
      {/* ================= Sidebar ================= */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-gray-900 text-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300`}
      >
        <Link
          to="/"
          className="block p-5 text-orange-500 text-2xl font-bold border-b border-gray-700"
        >
          Freelance Marketplace
        </Link>

        <nav className="flex flex-col p-4 gap-2">
          {[
            { to: "/dashboard", label: "Dashboard Home", end: true },
            { to: "/dashboard/myAddedJob", label: "My Added Jobs" },
            { to: "/dashboard/addJob", label: "Add Job" },
            { to: "/dashboard/acceptTask", label: "My Accepted Tasks" },
            { to: "/dashboard/profile", label: "Profile" },
          ].map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `px-4 py-2 rounded transition ${
                  isActive
                    ? "bg-orange-500"
                    : "hover:bg-gray-700"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* ================= Main Content ================= */}
      <div className="lg:ml-64 h-full flex flex-col">
        {/* ================= Navbar ================= */}
        <header className="sticky top-0 z-40 bg-orange-300 shadow px-5 py-3 flex justify-between items-center">
          <button
            className="lg:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

          <h1 className="text-lg font-semibold">Dashboard</h1>

          {/* ================= Profile ================= */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/5Y3X7kR/user.png"
                }
                alt="profile"
                className="w-9 h-9 rounded-full border"
              />
              <span className="hidden md:block font-medium">
                {user?.displayName || user?.email}
              </span>
            </button>

            {profileOpen && (
              <div
                onMouseLeave={() => setProfileOpen(false)}
                className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md overflow-hidden"
              >
                <Link
                  to="/dashboard/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* ================= Outlet Scroll Area ================= */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
