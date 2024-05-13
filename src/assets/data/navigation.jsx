import { FaHome } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { GiBookPile } from "react-icons/gi";
// import { GiExitDoor } from "react-icons/gi";
import { BsBriefcaseFill } from "react-icons/bs";

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
    icon: (
      <svg width="1em" height="1em">
        <linearGradient id="blue-gradient" x1="100%" y1="0" x2="0%" y2="100%">
          <stop offset="30%" stopColor="#a17fe0" />
          <stop offset="70%" stopColor="#5D26C1" />
        </linearGradient>

        <GiBookPile style={{ fill: "url(#blue-gradient)" }} />
      </svg>
    ),
    route: "books",
  },
  {
    title: "Case",
    icon: (
      <svg width="1em" height="1em">
        <linearGradient id="red-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="30%" stopColor="#C06C84" />
          <stop offset="70%" stopColor="#355C7D" />
        </linearGradient>

        <BsBriefcaseFill style={{ fill: "url(#red-gradient)" }} />
      </svg>
    ),
    route: "books",
  },
  {
    title: "More Books",
    icon: <GiBookPile className="text-violet-500" />,
    route: "books",
  },
];
