import React from "react";
import { Link } from "react-router-dom";

export default function NavigationCard() {
  return (
    <li className="border-2 ">
      <Link className="center flex-col">
        <img
          src="https://quintagroup.com/cms/js/js-image/javascript-logo.png"
          alt=""
          className="w-40"
        />
        <span>books</span>
      </Link>
    </li>
  );
}
