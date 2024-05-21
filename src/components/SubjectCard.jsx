import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function SubjectCard({ desc, img, color }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  console.log(currentLang);
  const isArabic = currentLang === "ar";

  return (
    <Link
      className={` shadow-lg  shadow-neutral-700 ${color} rounded-md gap-8  pr-14 h-24 max-w-58 flex 
      items-center`}
    >
      <span className={` ${isArabic ? "mr-[-4rem]" : "ml-[-1rem] "} `}>
        <img
          src={img}
          className="size-16 rounded-sm  shadow-lg shadow-neutral-800"
          alt=""
        />
      </span>
      <span
        className={` text-black text-lg ${
          isArabic ? "ml-auto" : ""
        }    capitalize`}
      >
        <h2>{t(`${desc}`)}</h2>
      </span>
    </Link>
  );
}
