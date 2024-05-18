import React from "react";
import { NavLink } from "react-router-dom";
import { navBarData } from "../assets/data/navigation";

export default function NavigationBar() {
  return (
    <header className="h-16 bg-stone-800 py-4 w-full  mx-auto">
      <nav className=" ">
        <ul className="flex justify-evenly ">
          {navBarData.map(({ route, icon, id, isEnd }) => {
            return (
              <li className="text-3xl text-white " key={id}>
                <NavLink
                  to={route}
                  end={isEnd ?? false}
                  className={({ isActive }) => (isActive ? " text-accent" : "")}
                >
                  {icon}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
