import { FaHome } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { GiExitDoor } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";

// import { SiCoinmarketcap } from "react-icons/si"; // for signutrue

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
    title: "books",
    icon: <GiWhiteBook className="text-blue-500" />,
    route: "books",
  },

  {
    title: "faq",
    icon: <FaQuestionCircle className="text-indigo-500" />,
    route: "questions",
  },

  {
    title: "language",
    icon: <FaLanguage className="text-green-500" />,
    route: "",
    isLang: true,
  },
  {
    title: "about us",
    icon: <BsInfoCircleFill className=" text-yellow-500" />,
    route: "about",
  },
  {
    title: "log out",
    icon: <GiExitDoor className="text-red-500" />,
    isExit: true,
  },
];
