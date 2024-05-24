import { Link } from "react-router-dom";
import useLanguage from "../Hooks/useLanguage";
import { useTranslation } from "react-i18next";
import useExit from "../Hooks/useExit";
export default function NavigationCard({ title, route, icon, isExit, isLang }) {
  const { changeLang, paraFont } = useLanguage();
  const { t } = useTranslation();
  const exit = useExit();
  async function languageChangeHandler() {
    await changeLang();
  }
  return (
    <li
      className="clickEffect"
      onClick={(isExit && exit) || (isLang && languageChangeHandler)}
    >
      <Link
        to={route}
        className="w-40 center flex-col   bg-white shadow-md h-28 rounded-md"
      >
        <span className="text-[65px]">{icon}</span>
        <span className={`capitalize ${paraFont} `}>{t(`${title}`)}</span>
      </Link>
    </li>
  );
}
