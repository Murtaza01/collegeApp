import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/college.jpg";
export default function SubjectsPage() {
  return (
    <main className="pt-20 px-5 h-screen bgPattren ">
      <Link className="relative block active:scale-95 max-w-[30rem] mx-auto ">
        <figure className="isolate rounded-md bg-slate-400">
          <img
            src={img}
            alt=""
            className="mix-blend-multiply  w-full  max-h-16  object-cover "
          />
        </figure>
        <span className="absolute center3 w-10/12 text-white  text-xl  capitalize">
          <h1>ملخصات الادب</h1>
        </span>
      </Link>
    </main>
  );
}
