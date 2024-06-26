import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";
export default function SubjectCard({ desc, img, color, title, lastCard }) {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  return (
    <Link
      to={title}
      className={` ${lastCard} shadow-lg max-w-[30rem] sm:w-[28rem]  shadow-neutral-700 ${color} rounded-md gap-8   h-24  flex 
      items-center `}
    >
      <span className={` ${isArabic ? "mr-[-1rem]" : "ml-[-1rem] "} `}>
        <img
          src={img}
          className="size-16 rounded-sm  shadow-lg shadow-neutral-800"
          alt=""
        />
      </span>
      <span className={` text-black text-lg  "ml-auto" capitalize`}>
        <h2>{t(`${desc}`)}</h2>
      </span>
    </Link>
  );
}
