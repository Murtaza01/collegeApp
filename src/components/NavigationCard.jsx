import React from "react";
import { Link } from "react-router-dom";

export default function NavigationCard({ title, route, icon }) {
  return (
    <li className=" ">
      <Link
        to={route}
        className="w-40 center flex-col  bg-gray-50 shadow-md h-28 rounded-md"
      >
        <span className="text-[70px] text-gray-700 ">{icon}</span>
        <span className="">{title}</span>
      </Link>
    </li>
  );
}
