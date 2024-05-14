import { FaHome } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { GiExitDoor } from "react-icons/gi";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa6";

export const navBarData = [
  {
    id: 1,
    route: "",
    icon: <FaHome />,
    isEnd: true,
  },
  {
    id: 2,
    route: "books",
    icon: <GiWhiteBook />,
  },
];

export const navCardData = [
  {
    title: "Books",
    icon: <GiWhiteBook className="text-blue-500" />,
    route: "books",
  },
  {
    title: "greeting",
    icon: <BsBriefcaseFill className="text-gray-600" />,
    route: "books",
  },
  {
    title: "language",
    icon: <FaLanguage className="text-green-500" />,
    route: "",
    isLang: true,
  },
  {
    title: "Exit",
    icon: <GiExitDoor className="text-red-500" />,
    isExit: true,
  },
];
