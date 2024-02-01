import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[50px] text-black bg-blue-200 items-center px-5">
      <h3 className="font-bold italic">
        <NavLink
          className="text-blue-600 flex items gap-3"
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "purple" : "",
          })}
        >
          SHOP-UNIVERSE
        </NavLink>
      </h3>
      <div className="flex gap-5 text-gray-600">
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "",
          })}
          to="/home"
          className=" hover:text-red-700 transition ease-in-out delay-100 hover:scale-125 mr-2 "
        >
          Home
        </NavLink>

        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "",
          })}
          to="/favorites"
          className="mr-2  hover:text-red-700 transition ease-in-out delay-100 hover:scale-125"
        >
          Favorites
        </NavLink>
        <NavLink
          to="/about"
          className="mr-2  hover:text-red-700 transition ease-in-out delay-100 hover:scale-125"
        >
          About
        </NavLink>

        <NavLink
          to="/"
          className="mr-2  hover:text-red-700 transition ease-in-out delay-100 hover:scale-125"
        >
          Logout
        </NavLink>

        {/* <Link to="/" className="mr-2">
          Home
        </Link> */}
        {/* <Link to="favorites" className="mr-2">
          Favorites
        </Link> */}
        {/* <Link to="/" className="mr-2">
          Logout
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
