import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex gap-40 text-lg font-medium text-gray-700 justify-center h-20 items-center ">
      <NavLink to="/" className="hover:text-blue-500 text-2xl">Home</NavLink>
      <NavLink to="/pastes" className="hover:text-blue-500 text-2xl">Pastes</NavLink>
    </nav>
  );
}

export default Navbar;
