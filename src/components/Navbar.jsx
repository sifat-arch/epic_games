import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/icons8-epic-games-100.png";
import { AuthContext } from "../context/AuthContext";
import { IoLogOutOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => toast.success("Sign out successful"))
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
    navigate("/login");
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 font-semibold transition-all duration-300 
             ${
               isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-300"
             }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/game-details"
          className={({ isActive }) =>
            `px-4 py-2 font-semibold transition-all duration-300 
             ${
               isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-300"
             }`
          }
        >
          Game Details
        </NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-4 py-2 font-semibold transition-all duration-300 
                 ${
                   isActive
                     ? "text-cyan-400"
                     : "text-gray-300 hover:text-cyan-300"
                 }`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `px-4 py-2 font-semibold transition-all duration-300 
                 ${
                   isActive
                     ? "text-cyan-400"
                     : "text-gray-300 hover:text-cyan-300"
                 }`
              }
            >
              Register
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            `px-4 py-2 font-semibold transition-all duration-300 
             ${
               isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-300"
             }`
          }
        >
          News
        </NavLink>
      </li>
    </>
  );

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-cyan-600/30 shadow-lg"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      <div className="navbar container mx-auto px-4 text-white">
        {/* Left: Logo + Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-cyan-400 hover:text-cyan-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </button>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#111827] rounded-box w-52 border border-cyan-700/30"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2">
            <motion.img
              src={logo}
              alt="logo"
              className="w-10 h-10"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <span className="text-lg font-bold text-cyan-400 tracking-widest">
              Epic Games
            </span>
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">{navLinks}</ul>
        </div>

        {/* Right: Profile + Logout */}
        <div className="navbar-end flex items-center gap-4">
          {user && (
            <Link to="/my-profile">
              <motion.img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full border border-cyan-400"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </Link>
          )}
          {user && (
            <motion.button
              onClick={handleSignOut}
              whileTap={{ scale: 0.9 }}
              className="btn btn-sm bg-cyan-500/20 text-cyan-300 border border-cyan-600 
                         hover:bg-cyan-500/40 hover:text-white transition-all"
            >
              <IoLogOutOutline size={20} />
              Logout
            </motion.button>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
