import { FaHome } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { GiExitDoor } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { GiBookCover } from "react-icons/gi";

// import { GiNotebook } from "react-icons/gi";
// import { VscBook } from "react-icons/vsc";
// import { GiOpenBook } from "react-icons/gi";

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
  {
    id: 3,
    route: "resources",
    icon: <GiBookCover />,
  },
];

export const navCardData = [
  {
    title: "books",
    icon: <GiWhiteBook className="text-purple-500" />,
    route: "books",
  },
  {
    title: "resources",
    icon: <GiBookCover className="text-orange-500" />,
    route: "resources",
  },

  {
    title: "info",
    icon: <FaQuestionCircle className="text-blue-500" />,
    route: "",
  },

  {
    title: "language",
    icon: <FaLanguage className=" text-green-500" />,
    route: "",
    isLang: true,
  },
  {
    title: "about us",
    icon: <BsInfoCircleFill className=" text-cyan-500" />,
    route: "",
  },
  {
    title: "log out",
    icon: <GiExitDoor className="text-red-500" />,
    isExit: true,
  },
];
