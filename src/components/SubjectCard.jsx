import { Link } from "react-router-dom";
export default function SubjectCard({ img, color }) {
  return (
    <Link
      className={` shadow-lg shadow-gray-700 ${color} rounded-md   pr-3 h-24 max-w-58 flex justify-between items-center`}
    >
      <span className=" text-neutral-800   ml-auto capitalize">
        <h2>ملخصات الادب</h2>
      </span>
      <span className=" ml-[-1.5rem] ">
        <img
          src={img}
          className="size-16 rounded-sm  shadow-lg shadow-neutral-800"
          alt=""
        />
      </span>
    </Link>
  );
}
