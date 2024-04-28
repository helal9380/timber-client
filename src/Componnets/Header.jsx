/** @format */

import { useContext, useState } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [hover, setHover] = useState(false);
  const { logOut, user } = useContext(AuthContext);
  console.log(logOut, user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("successfully logOut");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("click");
  };

  const handleHover = () => {
    setHover(true);
  };
  const handleLeave = () => {
    setHover(false);
  };
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#CA8E3E] md:text-xl font-semibold ml-2 text-white py-1 lg:px-5 px-3 rounded-lg"
            : "py-1 lg:px-5 px-3 md:text-xl font-semibold"
        }
        to="/">
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#CA8E3E] md:text-xl font-semibold ml-2 text-white py-1 lg:px-5 px-3 rounded-lg"
            : "py-1 lg:px-5 px-3 md:text-xl font-semibold"
        }
        to="/add_art">
        Add Art
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#CA8E3E] md:text-xl font-semibold ml-2 text-white py-1 lg:px-5 px-3 rounded-lg"
            : "py-1 lg:px-5 px-3 md:text-xl font-semibold"
        }
        to="/all_art">
        All art
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#CA8E3E] md:text-xl font-semibold ml-2 text-white py-1 lg:px-5 px-3 rounded-lg"
            : "py-1 lg:px-5 px-3 md:text-xl font-semibold"
        }
        to="/myArt">
        My art
      </NavLink>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#CA8E3E] md:text-xl font-semibold ml-2 text-white py-1 lg:px-5 px-3 rounded-lg"
              : "py-1 lg:px-5 px-3 md:text-xl ml-2 font-semibold"
          }
          to="/register">
          Register
        </NavLink>
        {user ? (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#CA8E3E] md:text-xl font-semibold ml-2 text-white py-1 lg:px-5 px-3 rounded-lg"
                : "py-1 lg:px-5 px-3 md:text-xl ml-2 font-semibold"
            }
            onClick={handleLogOut}>
            LogOut
          </NavLink>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#CA8E3E] md:text-xl font-semibold ml-2 text-white py-1 lg:px-5 px-3 rounded-lg"
                : "py-1 lg:px-5 px-3 md:text-xl ml-2 font-semibold"
            }
            to="/login">
            Login
          </NavLink>
        )}
      </div>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Timber Gem</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {user && (
          <div className="flex items-center gap-5">
            <div
              className="relative w-full flex items-center gap-5"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}>
              <img
                className="w-10 h-10 cursor-pointer rounded-full"
                src={user.photoURL}
                alt=""
              />
              {hover && (
                <div className="absolute z-10 w-80 transition font-bold text-[12px] top-12 right-0 border rounded-xl text-white bg-slate-800 border-[#ffcc00] px-5 mt-2 py-10">
                  <div className="mb-2">
                    <div className="flex flex-col items-center justify-center">
                      <FaUserCircle className="text-[#ffcc00] text-2xl" />
                      <h2 className="text-white text-lg font-semibold">
                        My Profile
                      </h2>
                      <div className="w-10 my-2 h-[2px] mx-auto bg-[#ffcc00]"></div>
                    </div>
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                    <h3 className="">Name:</h3>
                    <h3 className="mb-5">{user.displayName}</h3>
                    <div className="w-10 h-[2px] bg-[#ffcc00] mx-auto"></div>
                  </div>
                  <div>
                    <MdEmail className="text-2xl text-[#ffcc00]" />
                  </div>
                  <h3>Email:</h3>
                  <h3>{user.email}</h3>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
