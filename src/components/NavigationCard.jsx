import React from "react";
import { Link } from "react-router-dom";

export default function NavigationCard({ title, route, image }) {
  return (
    <li className=" w-full">
      <Link to={route} className="center flex-col px-5">
        <img src={image} alt="" className="w-40" />
        <span>{title}</span>
      </Link>
    </li>
  );
}
