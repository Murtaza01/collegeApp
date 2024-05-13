import { FaHome } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import book from "../../assets/books.png";
import book1 from "../../assets/books.png";

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
    image: book,
    route: "books",
  },
  {
    title: "More Books",
    image: book1,
    route: "books",
  },
];
