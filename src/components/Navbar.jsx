import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../assets/context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => alert("sign out successful"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/game-details">Game Details</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/relevent">Relevent</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img className="w-15 h-15 cursor-pointer" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal px-4 gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold ${
                  isActive ? "bg-black text-white shadow-md scale-105" : ""
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
                `font-semibold ${
                  isActive ? "bg-black text-white shadow-md scale-105" : ""
                }`
              }
            >
              Game Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `font-semibold ${
                  isActive ? "bg-black text-white shadow-md scale-105" : ""
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
                `font-semibold ${
                  isActive ? "bg-black text-white shadow-md scale-105" : ""
                }`
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/other"
              className={({ isActive }) =>
                `font-semibold ${
                  isActive ? "bg-black text-white shadow-md scale-105" : ""
                }`
              }
            >
              Relevent
            </NavLink>
          </li>
        </ul>
      </div>
      {user ? (
        <div className="mr-3">
          <Link to="/my-profile">
            <img
              className="w-12 h-10 rounded-full"
              src={user.photoURL}
              alt=""
            />
          </Link>
        </div>
      ) : (
        ""
      )}

      {user ? (
        <div className="">
          <button
            className="btn px-6 hover:bg-black hover:text-white hover:transition"
            onClick={handleSignOut}
          >
            Logout
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
