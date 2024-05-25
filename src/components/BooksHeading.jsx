import React from "react";
import { Link } from "react-router-dom";
export default function BooksHeading({ heading }) {
  return (
    <>
      {heading.head}{" "}
      <Link to={""}>
        {/* `/${stage}/instructions` */}
        <sup className="lowercase text-base md:text-lg">
          <span className=" text-gray-300 shadow-inset ">{heading.almost}</span>
          <span className="text-gray-500 ">{heading.quesMark}</span>
        </sup>
      </Link>
    </>
  );
}
