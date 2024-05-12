import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";

export default function NavigationBar() {
  return (
    <header className="h-10 bg-gray-300 rounded-md py-1 w-11/12  mx-auto">
      <nav className=" ">
        <ul className="flex justify-evenly ">
          <li className="text-3xl">
            <NavLink
              to={""}
              end
              className={({ isActive }) => (isActive ? "text-yellow-200" : "")}
            >
              <FaHome />
            </NavLink>
          </li>
          <li className="text-3xl">
            <NavLink
              className={({ isActive }) => (isActive ? "text-yellow-200" : "")}
              to="books"
            >
              <GiBookshelf />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
